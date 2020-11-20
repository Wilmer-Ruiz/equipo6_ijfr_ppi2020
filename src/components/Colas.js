import React, { Component } from "react";
import "./styless/Panel.css";
import { Link } from "react-router-dom";

export default class Cola extends Component {
  render() {
    return (
      <>
      <div className="main-title">
      Lista de Espera
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
          <Link to="/Homeadm">
          <button className="dropdown-item" type="button">
            Pedidos
          </button>
          </Link>
          <button className="dropdown-item" type="button">
            Cerrar Sesión
          </button>
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
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">123</th>
      <td>Mark</td>
      <td>6</td>
      <td>Historia de la Alquimia</td>
    </tr>
    <tr>
      <th scope="row">456</th>
      <td>Jacob</td>
      <td>6</td>
      <td>Historia de China</td>
    </tr>
    <tr>
      <th scope="row">789</th>
      <td>Larry</td>
      <td>6</td>
      <td>Historia del Arte</td>
    </tr>
  </tbody>
</table>
    </div>



    </>
      
    );
  }
}