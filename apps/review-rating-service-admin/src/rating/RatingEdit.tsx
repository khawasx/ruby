import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ProductReviewTitle } from "../productReview/ProductReviewTitle";

export const RatingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="productReviews"
          reference="ProductReview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProductReviewTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
