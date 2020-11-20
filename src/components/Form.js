import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        email: "",
        password: ""
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefautl();
    const values = JSON.stringify(this.state.values);
    alert(values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <Link to="/Homeone">
        <input type="submit" value="Ingresar" className="btn btn-warning col-sm-12" />
        </Link>
        
        <Link to="/Homeadm">
        <input type="submit" value="Ingresar como adm" className="btn btn-warning col-sm-12" />
        </Link>
      </form>
    );
  }
}
