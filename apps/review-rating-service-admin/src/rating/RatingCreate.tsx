import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { ProductReviewTitle } from "../productReview/ProductReviewTitle";

export const RatingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
