/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { Ctx, EventPattern, Payload, RmqContext } from "@nestjs/microservices";
import { RabbitMQMessage } from "./RabbitMQMessage";
import { Controller, Logger } from "@nestjs/common";

@Controller("rabbitmq-controller")
export class RabbitMQController {
  private readonly logger = new Logger(RabbitMQController.name);

  @EventPattern("reset.password")
  async onResetPassword(
    @Payload()
    message: RabbitMQMessage,
    @Ctx()
    context: RmqContext
  ): Promise<void> {}

  @EventPattern("donate")
  async onDonate(
    @Payload()
    message: RabbitMQMessage,
    @Ctx()
    context: RmqContext
  ): Promise<void> {}


  @EventPattern("handle.support.request")
  async onHandleSupportRequest(
    @Payload()
    message: RabbitMQMessage,
    @Ctx()
    context: RmqContext
  ): Promise<void> {}

  @EventPattern("recent.users")
  async onRecentUsers(
    @Payload()
    message: RabbitMQMessage,
    @Ctx()
    context: RmqContext
  ): Promise<void> {}

  @EventPattern("noti.to.admin")
  async onNotiToAdmin(
    @Payload()
    message: RabbitMQMessage,
    @Ctx()
    context: RmqContext
  ): Promise<void> {}
}
