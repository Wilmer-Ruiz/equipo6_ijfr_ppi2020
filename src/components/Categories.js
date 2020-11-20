import React, { Component } from "react";
import "./styless/Categories.css";
import { Link } from "react-router-dom";
import logo from "./Images/Historia2.jpeg";
import logo2 from "./Images/Poemas.png";
import logo3 from "./Images/Ciencia.png";
import logo4 from "./Images/Anatomía.png";
export default class Categories extends Component {
  render() {
    return (
      <>
        <div className="main-title">
          Categorias
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
              <Link to="/Homeone">
                <button className="dropdown-item" type="button">
                  Servicios
                </button>
              </Link>
              <button className="dropdown-item" type="button">
                Mi Tiempo
              </button>
              <button className="dropdown-item" type="button">
                Cola
              </button>
              <button className="dropdown-item" type="button">
                Cerrar Sesión
              </button>
            </div>
          </div>
        </div>
        <div className="sections">
          <div className="content">
            <h1>
              Contamos con varías secciónes de libros, escoge la que más te
              guste:
            </h1>
          </div>
          <section className="sections-items">
            <h2>
              Historia: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque cumque sint cum. Temporibus nisi ea, quibusdam quo rem
              molestias eius quia unde nostrum autem dolor iure eveniet odio
              ipsam officiis
            </h2>
            <div className="img">
              <img src={logo} alt={"Logo"} />
            </div>
            <Link to="/Hometwo">
              <button
                type="button"
                className="btn btn-warning"
                data-toggle="modal"
                data-target="#exampleModalLong"
              >
                Ver libros
              </button>
            </Link>
          </section>
          <section className="sections-itemss">
            <h2>
              Poemas: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque cumque sint cum. Temporibus nisi ea, quibusdam quo rem
              molestias eius quia unde nostrum autem dolor iure eveniet odio
              ipsam officiis
            </h2>
            <div className="img">
              <img src={logo2} alt={"Logo"} />
            </div>
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Ver libros
            </button>
          </section>
          <section className="sections-itemsss">
            <h2>
              Ciencia Ficción: Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Atque cumque sint cum. Temporibus nisi ea,
              quibusdam quo rem molestias eius quia unde nostrum autem dolor
              iure eveniet odio ipsam officiis
            </h2>
            <div className="img">
              <img src={logo3} alt={"Logo"} />
            </div>
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Ver libros
            </button>
          </section>
          <section className="sections-itemssss">
            <h2>
              Anatomía: Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Atque cumque sint cum. Temporibus nisi ea, quibusdam quo rem
              molestias eius quia unde nostrum autem dolor iure eveniet odio
              ipsam officiis
            </h2>
            <div className="img">
              <img src={logo4} alt={"Logo"} />
            </div>
            <button
              type="button"
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#exampleModalLong"
            >
              Ver libros
            </button>
          </section>
        </div>
      </>
    );
  }
}
