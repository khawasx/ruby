import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { RatingTitle } from "../rating/RatingTitle";

export const ProductReviewCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <TextInput label="customer" source="customer" />
        <TextInput label="product" source="product" />
        <ReferenceInput source="rating.id" reference="Rating" label="rating">
          <SelectInput optionText={RatingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
