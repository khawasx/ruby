import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MERCHANT_TITLE_FIELD } from "../merchant/MerchantTitle";

export const MerchantIdTrackingList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MerchantIdTrackings"}
      perPage={50}
      pagination={<Pagination />}
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
        <TextField label="successfulPurchases" source="successfulPurchases" />
        <TextField label="totalPurchases" source="totalPurchases" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
