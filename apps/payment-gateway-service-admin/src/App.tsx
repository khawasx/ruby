import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PostageList } from "./postage/PostageList";
import { PostageCreate } from "./postage/PostageCreate";
import { PostageEdit } from "./postage/PostageEdit";
import { PostageShow } from "./postage/PostageShow";
import { PaymentList } from "./payment/PaymentList";
import { PaymentCreate } from "./payment/PaymentCreate";
import { PaymentEdit } from "./payment/PaymentEdit";
import { PaymentShow } from "./payment/PaymentShow";
import { BusinessPurchaseList } from "./businessPurchase/BusinessPurchaseList";
import { BusinessPurchaseCreate } from "./businessPurchase/BusinessPurchaseCreate";
import { BusinessPurchaseEdit } from "./businessPurchase/BusinessPurchaseEdit";
import { BusinessPurchaseShow } from "./businessPurchase/BusinessPurchaseShow";
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
        title={"PaymentGatewayService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Postage"
          list={PostageList}
          edit={PostageEdit}
          create={PostageCreate}
          show={PostageShow}
        />
        <Resource
          name="Payment"
          list={PaymentList}
          edit={PaymentEdit}
          create={PaymentCreate}
          show={PaymentShow}
        />
        <Resource
          name="BusinessPurchase"
          list={BusinessPurchaseList}
          edit={BusinessPurchaseEdit}
          create={BusinessPurchaseCreate}
          show={BusinessPurchaseShow}
        />
      </Admin>
    </div>
  );
};

export default App;
