import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Blacklist from "./pages/blacklist";
import Home from "./pages/home";
import UpdatePage from "./pages/update";

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route path="/blacklist" children={<Blacklist />} />
          <Route path="/update" children={<UpdatePage />} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
