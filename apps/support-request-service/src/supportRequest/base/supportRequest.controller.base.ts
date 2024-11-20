/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SupportRequestService } from "../supportRequest.service";
import { SupportRequestCreateInput } from "./SupportRequestCreateInput";
import { SupportRequest } from "./SupportRequest";
import { SupportRequestFindManyArgs } from "./SupportRequestFindManyArgs";
import { SupportRequestWhereUniqueInput } from "./SupportRequestWhereUniqueInput";
import { SupportRequestUpdateInput } from "./SupportRequestUpdateInput";

export class SupportRequestControllerBase {
  constructor(protected readonly service: SupportRequestService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: SupportRequest })
  async createSupportRequest(
    @common.Body() data: SupportRequestCreateInput
  ): Promise<SupportRequest> {
    return await this.service.createSupportRequest({
      data: data,
      select: {
        city: true,
        createdAt: true,
        description: true,
        detailAdrdess: true,
        district: true,
        email: true,
        fullname: true,
        id: true,
        phone: true,
        quantity: true,
        supportRequestTypeId: true,
        updatedAt: true,
        ward: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [SupportRequest] })
  @ApiNestedQuery(SupportRequestFindManyArgs)
  async supportRequests(
    @common.Req() request: Request
  ): Promise<SupportRequest[]> {
    const args = plainToClass(SupportRequestFindManyArgs, request.query);
    return this.service.supportRequests({
      ...args,
      select: {
        city: true,
        createdAt: true,
        description: true,
        detailAdrdess: true,
        district: true,
        email: true,
        fullname: true,
        id: true,
        phone: true,
        quantity: true,
        supportRequestTypeId: true,
        updatedAt: true,
        ward: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async supportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput
  ): Promise<SupportRequest | null> {
    const result = await this.service.supportRequest({
      where: params,
      select: {
        city: true,
        createdAt: true,
        description: true,
        detailAdrdess: true,
        district: true,
        email: true,
        fullname: true,
        id: true,
        phone: true,
        quantity: true,
        supportRequestTypeId: true,
        updatedAt: true,
        ward: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSupportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput,
    @common.Body() data: SupportRequestUpdateInput
  ): Promise<SupportRequest | null> {
    try {
      return await this.service.updateSupportRequest({
        where: params,
        data: data,
        select: {
          city: true,
          createdAt: true,
          description: true,
          detailAdrdess: true,
          district: true,
          email: true,
          fullname: true,
          id: true,
          phone: true,
          quantity: true,
          supportRequestTypeId: true,
          updatedAt: true,
          ward: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: SupportRequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSupportRequest(
    @common.Param() params: SupportRequestWhereUniqueInput
  ): Promise<SupportRequest | null> {
    try {
      return await this.service.deleteSupportRequest({
        where: params,
        select: {
          city: true,
          createdAt: true,
          description: true,
          detailAdrdess: true,
          district: true,
          email: true,
          fullname: true,
          id: true,
          phone: true,
          quantity: true,
          supportRequestTypeId: true,
          updatedAt: true,
          ward: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}