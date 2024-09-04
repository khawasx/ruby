import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";

export const MerchantIdTrackingShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="successfulPurchases" source="successfulPurchases" />
        <TextField label="totalPurchases" source="totalPurchases" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
