import React, { Component } from "react";
import "./styless/Panel.css";
import { Link } from "react-router-dom";
export default class Panell extends Component {
  constructor(props) {
    super(props);
    this.handleModalShowClick = this.handleModalShowClick.bind(this);
    this.handleModalCloseClick = this.handleModalCloseClick.bind(this);
    this.state = {
      showModal: false,
    }
  }

  handleModalShowClick(e) {
    e.preventDefault();
    this.setState({
      showModal: true
    })
  }

  handleModalCloseClick() {
    this.setState({
      showModal: false
    })
  }
   
  render() {
    return (
      <>
        <div className="title">
          LIBROS DE HISTORIA
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Menú
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <Link to="/Homecat">
                <button onClick={this.handleModalShowClick} className="dropdown-item" type="button">
                  Categorías
                </button>
              </Link>
              <Link to="/Homeone">
                <button onClick={this.handleModalShowClick} className="dropdown-item" type="button">
                  Servicios
                </button>
              </Link>
              <button className="dropdown-item" type="button" onClick={this.handleModalShowClick}>
                Mi Tiempo
              </button>
             
              <button onClick={this.handleModalShowClick} className="dropdown-item" type="button">
                Cola
              </button>
              
              <button onClick={this.handleModalShowClick} className="dropdown-item" type="button">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
