import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { SecurityLogList } from "./securityLog/SecurityLogList";
import { SecurityLogCreate } from "./securityLog/SecurityLogCreate";
import { SecurityLogEdit } from "./securityLog/SecurityLogEdit";
import { SecurityLogShow } from "./securityLog/SecurityLogShow";
import { VulnerabilityScanList } from "./vulnerabilityScan/VulnerabilityScanList";
import { VulnerabilityScanCreate } from "./vulnerabilityScan/VulnerabilityScanCreate";
import { VulnerabilityScanEdit } from "./vulnerabilityScan/VulnerabilityScanEdit";
import { VulnerabilityScanShow } from "./vulnerabilityScan/VulnerabilityScanShow";
import { PerformanceMetricList } from "./performanceMetric/PerformanceMetricList";
import { PerformanceMetricCreate } from "./performanceMetric/PerformanceMetricCreate";
import { PerformanceMetricEdit } from "./performanceMetric/PerformanceMetricEdit";
import { PerformanceMetricShow } from "./performanceMetric/PerformanceMetricShow";
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
        title={"SecurityPerformanceService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="SecurityLog"
          list={SecurityLogList}
          edit={SecurityLogEdit}
          create={SecurityLogCreate}
          show={SecurityLogShow}
        />
        <Resource
          name="VulnerabilityScan"
          list={VulnerabilityScanList}
          edit={VulnerabilityScanEdit}
          create={VulnerabilityScanCreate}
          show={VulnerabilityScanShow}
        />
        <Resource
          name="PerformanceMetric"
          list={PerformanceMetricList}
          edit={PerformanceMetricEdit}
          create={PerformanceMetricCreate}
          show={PerformanceMetricShow}
        />
      </Admin>
    </div>
  );
};

export default App;
