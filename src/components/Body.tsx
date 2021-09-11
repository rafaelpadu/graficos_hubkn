import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "./bodyComponents/DashBoard";
import Vendedores from "./bodyComponents/Vendedores";

const Body: React.FunctionComponent = () => {
  return (
    <Switch>
      <React.Fragment>
        <main>
          <Route exact path="/">
            <DashBoard />
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
