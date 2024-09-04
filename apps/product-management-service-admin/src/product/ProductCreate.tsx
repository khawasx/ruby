import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="gradeCondition" source="gradeCondition" />
        <TextInput label="memory" source="memory" />
        <TextInput label="size" source="size" />
      </SimpleForm>
    </Create>
  );
};
