import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OrderNotificationList } from "./orderNotification/OrderNotificationList";
import { OrderNotificationCreate } from "./orderNotification/OrderNotificationCreate";
import { OrderNotificationEdit } from "./orderNotification/OrderNotificationEdit";
import { OrderNotificationShow } from "./orderNotification/OrderNotificationShow";
import { PromotionNotificationList } from "./promotionNotification/PromotionNotificationList";
import { PromotionNotificationCreate } from "./promotionNotification/PromotionNotificationCreate";
import { PromotionNotificationEdit } from "./promotionNotification/PromotionNotificationEdit";
import { PromotionNotificationShow } from "./promotionNotification/PromotionNotificationShow";
import { IssueNotificationList } from "./issueNotification/IssueNotificationList";
import { IssueNotificationCreate } from "./issueNotification/IssueNotificationCreate";
import { IssueNotificationEdit } from "./issueNotification/IssueNotificationEdit";
import { IssueNotificationShow } from "./issueNotification/IssueNotificationShow";
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
        title={"NotificationService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OrderNotification"
          list={OrderNotificationList}
          edit={OrderNotificationEdit}
          create={OrderNotificationCreate}
          show={OrderNotificationShow}
        />
        <Resource
          name="PromotionNotification"
          list={PromotionNotificationList}
          edit={PromotionNotificationEdit}
          create={PromotionNotificationCreate}
          show={PromotionNotificationShow}
        />
        <Resource
          name="IssueNotification"
          list={IssueNotificationList}
          edit={IssueNotificationEdit}
          create={IssueNotificationCreate}
          show={IssueNotificationShow}
        />
      </Admin>
    </div>
  );
};

export default App;
