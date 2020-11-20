import React, { Component } from "react";
import "./styless/Panel.css";
import { Link } from "react-router-dom";
export default class Agglibro extends Component {
  render(){
    return(
      <>
      <div className="main-title">
      Agregar Libros
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
          <Link to="/Homeadm">
            <button className="dropdown-item" type="button">
              Pedidos
            </button>
            </Link>
            <Link to="/Homecola">
          <button className="dropdown-item" type="button">
            Colas
          </button>
          </Link>
          <button className="dropdown-item" type="button">
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>

    <form>
  <div className="form-row">
    <div className="col">
      <label for="validationDefault01">Nombre del Libro</label>
      <input type="text" className="form-control" id="validationDefault01" placeholder="Titulo"  required/>
    </div>
    </div>

  <div className="form-row">
    <div className="col">
      <label for="validationDefault02">Autor</label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Autor"  required/>
    </div>
   </div> 
  
  <div className="form-row">
    <div className="col">
      <label for="validationDefault03">Año de Publicación</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="Año" required/>
    </div>
  </div>
  <form>
  <div class="form-row">
    Subir Imagen 
    <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
  </div>
</form>
  <button className="btn btn-warning" type="submit">Subir Libro</button>
</form>

</>
    );
  }
}