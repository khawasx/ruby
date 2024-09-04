import { SecurityLogWhereInput } from "./SecurityLogWhereInput";
import { SecurityLogOrderByInput } from "./SecurityLogOrderByInput";

export type SecurityLogFindManyArgs = {
  where?: SecurityLogWhereInput;
  orderBy?: Array<SecurityLogOrderByInput>;
  skip?: number;
  take?: number;
};
