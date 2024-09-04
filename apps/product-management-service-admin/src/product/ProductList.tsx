import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="gradeCondition" source="gradeCondition" />
        <TextField label="ID" source="id" />
        <TextField label="memory" source="memory" />
        <TextField label="size" source="size" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
