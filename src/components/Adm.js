import React, { Component } from "react";
import "./styless/Panel.css";
import { Link } from "react-router-dom";

export default class Adm extends Component {
  render() {
    return (
      <>
      <div className="main-title">
      Pedidos
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
          <Link to="/Homelbr">
            <button className="dropdown-item" type="button">
              Subir Libros
            </button>
            </Link>
            <Link to="/Homecola">
          <button className="dropdown-item" type="button">
            Colas
          </button>
          </Link>
          <Link to="/">
          <button className="dropdown-item" type="button">
            Cerrar Sesión
          </button>
      </Link>
        </div>
      </div>
    </div>

    <div className="Tables">
    <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Doc</th>
      <th scope="col">Nombre</th>
      <th scope="col">Sección</th>
      <th scope="col">Libro</th>
      <th scope="col">Fecha</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">123</th>
      <td>Mark</td>
      <td>6</td>
      <td>Historia de la Alquimia</td>
      <td>DD/MM/YY</td>
    </tr>
    <tr>
      <th scope="row">456</th>
      <td>Jacob</td>
      <td>6</td>
      <td>Historia de China</td>
      <td>DD/MM/YY</td>
    </tr>
    <tr>
      <th scope="row">789</th>
      <td>Larry</td>
      <td>6</td>
      <td>Historia del Arte</td>
      <td>DD/MM/YY</td>
    </tr>
    
  </tbody>
</table>
    </div>



    </>
      
    );
  }
}