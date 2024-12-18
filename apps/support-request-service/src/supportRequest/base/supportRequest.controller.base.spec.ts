import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SupportRequestController } from "../supportRequest.controller";
import { SupportRequestService } from "../supportRequest.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  city: "exampleCity",
  createdAt: new Date(),
  descripton: "exampleDescripton",
  detailAddress: "exampleDetailAddress",
  district: "exampleDistrict",
  email: "exampleEmail",
  fullname: "exampleFullname",
  id: "exampleId",
  phone: "examplePhone",
  point: 42,
  quantity: 42,
  requestCode: "exampleRequestCode",
  supportRequestTypeId: "exampleSupportRequestTypeId",
  updatedAt: new Date(),
  ward: "exampleWard",
};
const CREATE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  descripton: "exampleDescripton",
  detailAddress: "exampleDetailAddress",
  district: "exampleDistrict",
  email: "exampleEmail",
  fullname: "exampleFullname",
  id: "exampleId",
  phone: "examplePhone",
  point: 42,
  quantity: 42,
  requestCode: "exampleRequestCode",
  supportRequestTypeId: "exampleSupportRequestTypeId",
  updatedAt: new Date(),
  ward: "exampleWard",
};
const FIND_MANY_RESULT = [
  {
    city: "exampleCity",
    createdAt: new Date(),
    descripton: "exampleDescripton",
    detailAddress: "exampleDetailAddress",
    district: "exampleDistrict",
    email: "exampleEmail",
    fullname: "exampleFullname",
    id: "exampleId",
    phone: "examplePhone",
    point: 42,
    quantity: 42,
    requestCode: "exampleRequestCode",
    supportRequestTypeId: "exampleSupportRequestTypeId",
    updatedAt: new Date(),
    ward: "exampleWard",
  },
];
const FIND_ONE_RESULT = {
  city: "exampleCity",
  createdAt: new Date(),
  descripton: "exampleDescripton",
  detailAddress: "exampleDetailAddress",
  district: "exampleDistrict",
  email: "exampleEmail",
  fullname: "exampleFullname",
  id: "exampleId",
  phone: "examplePhone",
  point: 42,
  quantity: 42,
  requestCode: "exampleRequestCode",
  supportRequestTypeId: "exampleSupportRequestTypeId",
  updatedAt: new Date(),
  ward: "exampleWard",
};

const service = {
  createSupportRequest() {
    return CREATE_RESULT;
  },
  supportRequests: () => FIND_MANY_RESULT,
  supportRequest: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SupportRequest", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SupportRequestService,
          useValue: service,
        },
      ],
      controllers: [SupportRequestController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /supportRequests", async () => {
    await request(app.getHttpServer())
      .post("/supportRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /supportRequests", async () => {
    await request(app.getHttpServer())
      .get("/supportRequests")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /supportRequests/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supportRequests"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /supportRequests/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supportRequests"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /supportRequests existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/supportRequests")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/supportRequests")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
