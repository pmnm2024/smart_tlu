
#!/bin/bash

# Dừng từng service
SERVICES=("api-gateway/my-gateway" "user-service" "mail-service" "langchain" "fcm-service" "notification-service" "warehouse-service" "support-request-service" "donation-service" )
echo "Stopping all services..."
for service in "${SERVICES[@]}"; do
  echo "Stopping service: $service..."
  cd ../"$service" || exit
  docker compose down
  cd - > /dev/null
done

# Dừng dependencies
echo "Stopping dependencies (Redis, RabbitMQ)..."
cd ../dependencies || exit
docker compose -f docker-compose.dependencies.yml down
cd - > /dev/null

# Xóa Docker network
NETWORK_NAME="app-network"
if docker network ls | grep -q $NETWORK_NAME; then
  echo "Removing Docker network: $NETWORK_NAME..."
  docker network rm $NETWORK_NAME
else
  echo "Docker network $NETWORK_NAME does not exist."
fi

echo "All services and dependencies have been stopped and cleaned up!"
