/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SupportRequest as PrismaSupportRequest } from "@prisma/client";

export class SupportRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SupportRequestCountArgs, "select">
  ): Promise<number> {
    return this.prisma.supportRequest.count(args);
  }

  async supportRequests(
    args: Prisma.SupportRequestFindManyArgs
  ): Promise<PrismaSupportRequest[]> {
    return this.prisma.supportRequest.findMany(args);
  }
  async supportRequest(
    args: Prisma.SupportRequestFindUniqueArgs
  ): Promise<PrismaSupportRequest | null> {
    return this.prisma.supportRequest.findUnique(args);
  }
  async createSupportRequest(
    args: Prisma.SupportRequestCreateArgs
  ): Promise<PrismaSupportRequest> {
    return this.prisma.supportRequest.create(args);
  }
  async updateSupportRequest(
    args: Prisma.SupportRequestUpdateArgs
  ): Promise<PrismaSupportRequest> {
    return this.prisma.supportRequest.update(args);
  }
  async deleteSupportRequest(
    args: Prisma.SupportRequestDeleteArgs
  ): Promise<PrismaSupportRequest> {
    return this.prisma.supportRequest.delete(args);
  }
}
