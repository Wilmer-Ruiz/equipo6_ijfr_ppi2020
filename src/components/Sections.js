import React, { Component } from "react";
import logo from "./Images/LibrosINEM.jpg";
import logo2 from "./Images/BibliotecaINEM.jpg";
import logo3 from "./Images/ComputadoresINEM.png";
import logo4 from "./Images/AuditorioINEM.png";
import "./styless/Sec.css";
export default class Sections extends Component {
  render() {
    return (
      <div className="sections">
        <div className="content">
          <h1>
            Nuestra biblioteca Inem José Félix de Restrepo te ofrece las
            siguientes zonas:
          </h1>
        </div>
        <section className="sections-items">
          <h2>
            Libros: En esta zona podrás encontrar una alta varidad de libros a
            tus gustos o todos aquellos que te pidan para estudiar, contamos con
            varias sección con distintos tipos de libros.
          </h2>
          <div className="img">
            <img src={logo} alt={"Logo"} />
          </div>
        </section>
        <section className="sections-itemss">
          <h2>
            Estudio: En esta zona puedes encontrar más de treinta (30) mesas las
            cuales cuentan con capacidad para cuatro (4) personas con espacio
            suficiente para estar comodos y realizar tus tareas
          </h2>
          <div className="img">
            <img src={logo2} alt={"Logo"} />
          </div>
        </section>
        <section className="sections-itemsss">
          <h2>
            Computadores: En esta zona puedes encontrar diez (10) computadores,
            los cuales puedes prestar por una (1) hora o tener un permiso
            especial para usarlos durante más tiempo.
          </h2>
          <div className="img">
            <img src={logo3} alt={"Logo"} />
          </div>
        </section>
        <section className="sections-itemssss">
          <h2>
            Sala de Conferencias: Nada más entrar a la biblioteca al lado
            izquierdo podemos encontrar una aula grande en la cual pueden estar
            +40 personas, dispuesta para mini eventos o reuniones.
          </h2>
          <div className="img">
            <img src={logo4} alt={"Logo"} />
          </div>
        </section>
      </div>
    );
  }
}
