import React, { Component } from "react";
import Card from "../components/Card";
import data from "../../data/data.json"; 
import './styles/Hometwo.css';
import Panell from "../components/Panell";
export default class Hometwo extends Component{

  constructor(){
    super();
    this.state = {
      data : data
    };
  }

  render(){
    return(
      <>
      <Panell/>
        <div className="container">
          <div className="row">
          <Card data={this.state.data}/>
          </div>
        </div>
       </>
    )
  }
}
