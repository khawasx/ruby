import * as graphql from "@nestjs/graphql";
import { PostageResolverBase } from "./base/postage.resolver.base";
import { Postage } from "./base/Postage";
import { PostageService } from "./postage.service";

@graphql.Resolver(() => Postage)
export class PostageResolver extends PostageResolverBase {
  constructor(protected readonly service: PostageService) {
    super(service);
  }
}
