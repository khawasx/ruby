import { CartCreateNestedManyWithoutCustomersInput } from "./CartCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  carts?: CartCreateNestedManyWithoutCustomersInput;
};
