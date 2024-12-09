import { RabbitMQModule } from "./rabbitmq/rabbitmq.module";
import { Module } from "@nestjs/common";
import { FcmModule } from "./fcm/fcm.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule } from "@nestjs/config";
import { FirebaseModule } from "./firebase/firebase.module";
import { WebsocketModule } from "./websocket/websocket.module";

@Module({
  controllers: [],
  imports: [
    RabbitMQModule,
    FcmModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    FirebaseModule,
    WebsocketModule
  ],
  providers: [],
})
export class AppModule {}
