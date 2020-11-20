import React, { Component } from "react";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
export default class Modal extends Component{
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  render(){
    return(
      <>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#exampleModalLong">
        Prestar
      </button>

<div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLongTitle">Prestamo del libro</h5>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div className="modal-body">
      PRESTA TU LIBRO
      <p>Elige el día el cual recogeras tu libro.
      *Disponible solo días habiles.
      </p>
      <Calendar
      onChange={this.onChange}
      value={this.state.date}
      />
    </div>
    <div className="modal-footer">
      <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      <button type="button" className="btn btn-primary">Aceptar</button>
    </div>
  </div>
</div>
</div>
</>
    );
}
}