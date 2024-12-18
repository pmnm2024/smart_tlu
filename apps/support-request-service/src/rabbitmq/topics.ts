/**
 * Copyright (c) ATA_TLU.
 *
 * This source code is licensed under the GPL V3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
export enum MyMessageBrokerTopics {

  Donate = "donate",
  HandleSupportRequest = "handle.support.request",
  HandleWarehouse = "handle.warehouse",
  ResetPassword = "reset.password",
  AddSupportRequest = "add.support.request",
}
export type AllMessageBrokerTopics = MyMessageBrokerTopics;
