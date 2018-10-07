import React, { Component } from "react";

export default class Path extends Component {
  render() {
    return (
      <div>
        <p>{this.props.path.name}</p>
        <p>{this.props.path.fullname}</p>
        <p>{this.props.path.description}</p>
        <p>{this.props.path.length}</p>
      </div>
    );
  }
}
