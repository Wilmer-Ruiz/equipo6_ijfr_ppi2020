import React, { Component } from "react";
import logo from "./Images/usuario.png"; // relative path to image
import "./styless/Panel.css";

export default class Logo extends Component {
  render() {
    return <img className="logo" src={logo} alt={"logo"} />;
  }
}
