import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="left">Saunter</h1>
        <button type="button" className="btn btn-primary right">
          Add path
        </button>
      </div>
    );
  }
}
