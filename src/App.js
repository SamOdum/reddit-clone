import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <React.Fragment>
      <h2>Hello from App</h2>
      <Switch>
        <Route exact path="/" Component={HomePage} />
        <Route path="/:id" Component={UserPage} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
