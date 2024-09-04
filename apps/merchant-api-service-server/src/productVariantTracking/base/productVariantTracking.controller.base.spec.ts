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
import { ProductVariantTrackingController } from "../productVariantTracking.controller";
import { ProductVariantTrackingService } from "../productVariantTracking.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  color: "exampleColor",
  createdAt: new Date(),
  customerConversionSuccessRate: 42.42,
  customerRefusalSuccessRate: 42.42,
  grade: "exampleGrade",
  id: "exampleId",
  merchantStarsAtTime: 42.42,
  merchantSuccessRate: 42.42,
  model: "exampleModel",
  price: 42.42,
  priceAtTime: 42.42,
  product: "exampleProduct",
  size: "exampleSize",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  color: "exampleColor",
  createdAt: new Date(),
  customerConversionSuccessRate: 42.42,
  customerRefusalSuccessRate: 42.42,
  grade: "exampleGrade",
  id: "exampleId",
  merchantStarsAtTime: 42.42,
  merchantSuccessRate: 42.42,
  model: "exampleModel",
  price: 42.42,
  priceAtTime: 42.42,
  product: "exampleProduct",
  size: "exampleSize",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    color: "exampleColor",
    createdAt: new Date(),
    customerConversionSuccessRate: 42.42,
    customerRefusalSuccessRate: 42.42,
    grade: "exampleGrade",
    id: "exampleId",
    merchantStarsAtTime: 42.42,
    merchantSuccessRate: 42.42,
    model: "exampleModel",
    price: 42.42,
    priceAtTime: 42.42,
    product: "exampleProduct",
    size: "exampleSize",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  color: "exampleColor",
  createdAt: new Date(),
  customerConversionSuccessRate: 42.42,
  customerRefusalSuccessRate: 42.42,
  grade: "exampleGrade",
  id: "exampleId",
  merchantStarsAtTime: 42.42,
  merchantSuccessRate: 42.42,
  model: "exampleModel",
  price: 42.42,
  priceAtTime: 42.42,
  product: "exampleProduct",
  size: "exampleSize",
  updatedAt: new Date(),
};

const service = {
  createProductVariantTracking() {
    return CREATE_RESULT;
  },
  productVariantTrackings: () => FIND_MANY_RESULT,
  productVariantTracking: ({ where }: { where: { id: string } }) => {
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

describe("ProductVariantTracking", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProductVariantTrackingService,
          useValue: service,
        },
      ],
      controllers: [ProductVariantTrackingController],
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

  test("POST /productVariantTrackings", async () => {
    await request(app.getHttpServer())
      .post("/productVariantTrackings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /productVariantTrackings", async () => {
    await request(app.getHttpServer())
      .get("/productVariantTrackings")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /productVariantTrackings/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productVariantTrackings"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /productVariantTrackings/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/productVariantTrackings"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /productVariantTrackings existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/productVariantTrackings")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/productVariantTrackings")
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
