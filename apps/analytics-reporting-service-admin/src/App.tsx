import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SalesReportList } from "./salesReport/SalesReportList";
import { SalesReportCreate } from "./salesReport/SalesReportCreate";
import { SalesReportEdit } from "./salesReport/SalesReportEdit";
import { SalesReportShow } from "./salesReport/SalesReportShow";
import { ConversionRateList } from "./conversionRate/ConversionRateList";
import { ConversionRateCreate } from "./conversionRate/ConversionRateCreate";
import { ConversionRateEdit } from "./conversionRate/ConversionRateEdit";
import { ConversionRateShow } from "./conversionRate/ConversionRateShow";
import { ProductTrendList } from "./productTrend/ProductTrendList";
import { ProductTrendCreate } from "./productTrend/ProductTrendCreate";
import { ProductTrendEdit } from "./productTrend/ProductTrendEdit";
import { ProductTrendShow } from "./productTrend/ProductTrendShow";
import { CustomerBehaviorList } from "./customerBehavior/CustomerBehaviorList";
import { CustomerBehaviorCreate } from "./customerBehavior/CustomerBehaviorCreate";
import { CustomerBehaviorEdit } from "./customerBehavior/CustomerBehaviorEdit";
import { CustomerBehaviorShow } from "./customerBehavior/CustomerBehaviorShow";
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
        title={"AnalyticsReportingService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SalesReport"
          list={SalesReportList}
          edit={SalesReportEdit}
          create={SalesReportCreate}
          show={SalesReportShow}
        />
        <Resource
          name="ConversionRate"
          list={ConversionRateList}
          edit={ConversionRateEdit}
          create={ConversionRateCreate}
          show={ConversionRateShow}
        />
        <Resource
          name="ProductTrend"
          list={ProductTrendList}
          edit={ProductTrendEdit}
          create={ProductTrendCreate}
          show={ProductTrendShow}
        />
        <Resource
          name="CustomerBehavior"
          list={CustomerBehaviorList}
          edit={CustomerBehaviorEdit}
          create={CustomerBehaviorCreate}
          show={CustomerBehaviorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
