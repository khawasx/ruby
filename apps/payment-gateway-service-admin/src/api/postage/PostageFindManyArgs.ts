import { PostageWhereInput } from "./PostageWhereInput";
import { PostageOrderByInput } from "./PostageOrderByInput";

export type PostageFindManyArgs = {
  where?: PostageWhereInput;
  orderBy?: Array<PostageOrderByInput>;
  skip?: number;
  take?: number;
};
