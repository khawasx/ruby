import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MerchantIdTrackingTitle } from "../merchantIdTracking/MerchantIdTrackingTitle";
import { ProductVariantTrackingTitle } from "../productVariantTracking/ProductVariantTrackingTitle";

export const MerchantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="merchantIdTrackings"
          reference="MerchantIdTracking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MerchantIdTrackingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="productVariantTrackings"
          reference="ProductVariantTracking"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductVariantTrackingTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
