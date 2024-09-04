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

import { MERCHANT_TITLE_FIELD } from "./MerchantTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const MerchantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MerchantIdTracking"
          target="merchantId"
          label="MerchantIdTrackings"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="expectedArrivals" source="expectedArrivals" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Merchant"
              source="merchant.id"
              reference="Merchant"
            >
              <TextField source={MERCHANT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="noShowPurchases" source="noShowPurchases" />
            <TextField label="Product" source="product" />
            <TextField label="refusedPurchases" source="refusedPurchases" />
            <TextField
              label="successfulPurchases"
              source="successfulPurchases"
            />
            <TextField label="totalPurchases" source="totalPurchases" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ProductVariantTracking"
          target="merchantId"
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
