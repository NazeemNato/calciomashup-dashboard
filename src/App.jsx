import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Blacklist from "./pages/blacklist";
import Home from "./pages/home";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/blacklist" children={<Blacklist />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
