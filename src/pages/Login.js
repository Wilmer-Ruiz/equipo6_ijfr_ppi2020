import React, { Component } from "react";
import Form from "../components/Form";
import "./styles/loginStyles.css";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";
export default class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row login-container d-flex justify-content-center d-flex align-items-center">
            <div className="border p-5">
              <Logo />
              <Form />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
