import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="gradeCondition" source="gradeCondition" />
        <TextInput label="memory" source="memory" />
        <TextInput label="size" source="size" />
      </SimpleForm>
    </Edit>
  );
};
