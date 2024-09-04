import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { MerchantTitle } from "../merchant/MerchantTitle";

export const MerchantIdTrackingEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput
          step={1}
          label="expectedArrivals"
          source="expectedArrivals"
        />
        <ReferenceInput
          source="merchant.id"
          reference="Merchant"
          label="Merchant"
        >
          <SelectInput optionText={MerchantTitle} />
        </ReferenceInput>
        <NumberInput
          step={1}
          label="noShowPurchases"
          source="noShowPurchases"
        />
        <TextInput label="Product" source="product" />
        <NumberInput
          step={1}
          label="refusedPurchases"
          source="refusedPurchases"
        />
        <NumberInput
          step={1}
          label="successfulPurchases"
          source="successfulPurchases"
        />
        <NumberInput step={1} label="totalPurchases" source="totalPurchases" />
      </SimpleForm>
    </Edit>
  );
};
