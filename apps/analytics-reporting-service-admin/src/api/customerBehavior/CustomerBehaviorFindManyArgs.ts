import { CustomerBehaviorWhereInput } from "./CustomerBehaviorWhereInput";
import { CustomerBehaviorOrderByInput } from "./CustomerBehaviorOrderByInput";

export type CustomerBehaviorFindManyArgs = {
  where?: CustomerBehaviorWhereInput;
  orderBy?: Array<CustomerBehaviorOrderByInput>;
  skip?: number;
  take?: number;
};
