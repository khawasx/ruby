import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { MerchantIdTrackingTitle } from "../merchantIdTracking/MerchantIdTrackingTitle";
import { ProductVariantTrackingTitle } from "../productVariantTracking/ProductVariantTrackingTitle";

export const MerchantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
