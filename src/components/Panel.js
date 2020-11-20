import React, { Component } from "react";
import "./styless/Panel.css";
import Time from "./Time.js";

import { Link } from "react-router-dom";

export default class Panel extends Component {
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
    console.log(this.state)
    const { showModal } = this.state;
    return (
      <>
        <div className="title">
          NUESTROS SERVICIOS
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
                <button className="dropdown-item" type="button">
                  Categorías
                </button>
              </Link >

              
              <button  className="dropdown-item" type="button">
                Mi Tiempo
                </button>
                

                  
              <button className="dropdown-item" type="button" onClick={this.handleModalShowClick}>
                Cola
              </button>
              {showModal ? (<Time handleModalCloseClick={this.handleModalCloseClick} />) : null}
              

             
              <button className="dropdown-item" type="button">
                Cerrar Sesión
              </button>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
