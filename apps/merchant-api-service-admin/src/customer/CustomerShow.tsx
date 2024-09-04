import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ProductVariantTracking"
          target="customerId"
          label="ProductVariantTrackings"
        >
          <Datagrid rowClick="show">
            <TextField label="color" source="color" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="customerConversionSuccessRate"
              source="customerConversionSuccessRate"
            />
            <TextField
              label="customerRefusalSuccessRate"
              source="customerRefusalSuccessRate"
            />
            <TextField label="grade" source="grade" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Merchant"
              source="merchant.id"
              reference="Merchant"
            >
              <TextField source={MERCHANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField
              label="merchantStarsAtTime"
              source="merchantStarsAtTime"
            />
            <TextField
              label="merchantSuccessRate"
              source="merchantSuccessRate"
            />
            <TextField label="model" source="model" />
            <TextField label="price" source="price" />
            <TextField label="priceAtTime" source="priceAtTime" />
            <TextField label="Product" source="product" />
            <TextField label="size" source="size" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
