import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoardGeralNegocios from "./bodyComponents/dashboards/DashBoardGeralNegocios";
import DashBoardGeralPerf from "./bodyComponents/dashboards/DashBoardGeralPerf";
import DashBoardsPerf from "./bodyComponents/dashboards/DashBoardsPerf";
import DashBoarsNegocios from "./bodyComponents/dashboards/DashBoarsNegocios";
import Vendedores from "./bodyComponents/Vendedores";

const Body: React.FunctionComponent = () => {
  return (
    <Switch>
      <React.Fragment>
        <main>
          <Route exact path="/performance/geral">
            <DashBoardGeralPerf />
          </Route>
          <Route exact path="/performance/dashboards">
            <DashBoardsPerf />
          </Route>
          <Route exact path="/negocios/geral">
            <DashBoardGeralNegocios />
          </Route>
          <Route exact path="/negocios/dashboards">
            <DashBoarsNegocios />
          </Route>
          <Route path="/vendedores">
            <Vendedores />
          </Route>
        </main>
      </React.Fragment>
    </Switch>
  );
};
export default Body;
