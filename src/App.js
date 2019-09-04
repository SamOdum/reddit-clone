import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import Nav from "./pages/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/r" component={HomePage} />
        <Route path="/UserPage" component={UserPage} />
      </Switch>
    </div>
  );
};

export default App;
