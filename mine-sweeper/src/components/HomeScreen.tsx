import React, { Component } from "react";
import Game from "./Game";

export default class HomeScreen extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-12">
            <h1>TRUMPSWEEPER</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <h3>left side bar</h3>
          </div>
          <div className="col-8">
            <Game />
          </div>
          <div className="col-2">
            <h3>right side bar</h3>
          </div>
        </div>
      </div>
    );
  }
}
