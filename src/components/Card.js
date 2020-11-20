import React, { Component } from "react";
import "./styless/Card.css";
import Modal from "./Modal.js";
export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://takelibrary.wilmerruiz.repl.co/api/libros")
      .then((res) => {
        res.json();
      })
      .then((data) => {
        this.setState({
          items: data,
          isLoaded: true
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <>
          {items.map((item) => (
            <div className="col-lg-4 col-md-4 col-sm-12" key={item.id}>
              <div className="card m-2">
                <img
                  className="card-img-top card-img"
                  src={item.Portada}
                  alt=""
                />
                <div className="card-body">
                  <p className="card-text">{item.Titulo}</p>
                  <p className="card-text">{item.id_autor}</p>
                  <p className="card-text">{item.Año}</p>
                  <Modal />
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }
  }
}
