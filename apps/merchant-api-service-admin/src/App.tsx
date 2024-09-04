import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CustomerList } from "./customer/CustomerList";
import { CustomerCreate } from "./customer/CustomerCreate";
import { CustomerEdit } from "./customer/CustomerEdit";
import { CustomerShow } from "./customer/CustomerShow";
import { MerchantList } from "./merchant/MerchantList";
import { MerchantCreate } from "./merchant/MerchantCreate";
import { MerchantEdit } from "./merchant/MerchantEdit";
import { MerchantShow } from "./merchant/MerchantShow";
import { ProductVariantTrackingList } from "./productVariantTracking/ProductVariantTrackingList";
import { ProductVariantTrackingCreate } from "./productVariantTracking/ProductVariantTrackingCreate";
import { ProductVariantTrackingEdit } from "./productVariantTracking/ProductVariantTrackingEdit";
import { ProductVariantTrackingShow } from "./productVariantTracking/ProductVariantTrackingShow";
import { MerchantIdTrackingList } from "./merchantIdTracking/MerchantIdTrackingList";
import { MerchantIdTrackingCreate } from "./merchantIdTracking/MerchantIdTrackingCreate";
import { MerchantIdTrackingEdit } from "./merchantIdTracking/MerchantIdTrackingEdit";
import { MerchantIdTrackingShow } from "./merchantIdTracking/MerchantIdTrackingShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { PostageList } from "./postage/PostageList";
import { PostageCreate } from "./postage/PostageCreate";
import { PostageEdit } from "./postage/PostageEdit";
import { PostageShow } from "./postage/PostageShow";
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
        title={"MerchantApiService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Customer"
          list={CustomerList}
          edit={CustomerEdit}
          create={CustomerCreate}
          show={CustomerShow}
        />
        <Resource
          name="Merchant"
          list={MerchantList}
          edit={MerchantEdit}
          create={MerchantCreate}
          show={MerchantShow}
        />
        <Resource
          name="ProductVariantTracking"
          list={ProductVariantTrackingList}
          edit={ProductVariantTrackingEdit}
          create={ProductVariantTrackingCreate}
          show={ProductVariantTrackingShow}
        />
        <Resource
          name="MerchantIdTracking"
          list={MerchantIdTrackingList}
          edit={MerchantIdTrackingEdit}
          create={MerchantIdTrackingCreate}
          show={MerchantIdTrackingShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="Postage"
          list={PostageList}
          edit={PostageEdit}
          create={PostageCreate}
          show={PostageShow}
        />
      </Admin>
    </div>
  );
};

export default App;
