import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RatingList } from "./rating/RatingList";
import { RatingCreate } from "./rating/RatingCreate";
import { RatingEdit } from "./rating/RatingEdit";
import { RatingShow } from "./rating/RatingShow";
import { ProductReviewList } from "./productReview/ProductReviewList";
import { ProductReviewCreate } from "./productReview/ProductReviewCreate";
import { ProductReviewEdit } from "./productReview/ProductReviewEdit";
import { ProductReviewShow } from "./productReview/ProductReviewShow";
import { MerchantResponseList } from "./merchantResponse/MerchantResponseList";
import { MerchantResponseCreate } from "./merchantResponse/MerchantResponseCreate";
import { MerchantResponseEdit } from "./merchantResponse/MerchantResponseEdit";
import { MerchantResponseShow } from "./merchantResponse/MerchantResponseShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ReviewRatingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Rating"
          list={RatingList}
          edit={RatingEdit}
          create={RatingCreate}
          show={RatingShow}
        />
        <Resource
          name="ProductReview"
          list={ProductReviewList}
          edit={ProductReviewEdit}
          create={ProductReviewCreate}
          show={ProductReviewShow}
        />
        <Resource
          name="MerchantResponse"
          list={MerchantResponseList}
          edit={MerchantResponseEdit}
          create={MerchantResponseCreate}
          show={MerchantResponseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
