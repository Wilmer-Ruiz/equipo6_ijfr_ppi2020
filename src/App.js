import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homecat from "./pages/Homecat";
import Homeone from "./pages/Homeone";
import Hometwo from "./pages/Hometwo";
import Login from "./pages/Login";
import Homeadm from "./pages/Homeadm";
import Homelbr from "./pages/Homelbr";
import Homecola from "./pages/Homecola";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Homeone" component={Homeone} />
          <Route exact path="/Hometwo" component={Hometwo} />
          <Route exact path="/Homecat" component={Homecat} />
          <Route exact path="/Homeadm" component={Homeadm} />
          <Route exact path="/Homelbr" component={Homelbr} />
          <Route exact path="/Homecola" component={Homecola} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
