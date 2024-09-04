import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RatingTitle } from "../rating/RatingTitle";

export const ProductReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="customer" source="customer" />
        <TextInput label="product" source="product" />
        <ReferenceInput source="rating.id" reference="Rating" label="rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
