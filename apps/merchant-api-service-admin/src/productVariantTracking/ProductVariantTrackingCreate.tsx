import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { MerchantTitle } from "../merchant/MerchantTitle";

export const ProductVariantTrackingCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="color" source="color" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <NumberInput
          label="customerConversionSuccessRate"
          source="customerConversionSuccessRate"
        />
        <NumberInput
          label="customerRefusalSuccessRate"
          source="customerRefusalSuccessRate"
        />
        <TextInput label="grade" source="grade" />
        <ReferenceInput
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
        <NumberInput label="merchantStarsAtTime" source="merchantStarsAtTime" />
        <NumberInput label="merchantSuccessRate" source="merchantSuccessRate" />
        <TextInput label="model" source="model" />
        <NumberInput label="price" source="price" />
        <NumberInput label="priceAtTime" source="priceAtTime" />
        <TextInput label="Product" source="product" />
        <TextInput label="size" source="size" />
      </SimpleForm>
    </Create>
  );
};
