import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PostageService } from "./postage.service";
import { PostageControllerBase } from "./base/postage.controller.base";

@swagger.ApiTags("postages")
@common.Controller("postages")
export class PostageController extends PostageControllerBase {
  constructor(protected readonly service: PostageService) {
    super(service);
  }
}
