import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  createdAt?: SortOrder;
  gradeCondition?: SortOrder;
  id?: SortOrder;
  memory?: SortOrder;
  size?: SortOrder;
  updatedAt?: SortOrder;
};
