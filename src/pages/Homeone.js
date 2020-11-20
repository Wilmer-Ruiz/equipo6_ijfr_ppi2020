import React, { Component } from "react";
import Panel from "../components/Panel";
import Sections from "../components/Sections"
import './styles/Homeone.css';
export default class Homeone extends Component {
  render() {
    return (
      <React.Fragment>
        <Panel/>
      <Sections/>
      </React.Fragment>
    );
  }
}