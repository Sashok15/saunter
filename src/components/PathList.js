import React, { Component } from "react";
import Path from "./Path";

export default class PathList extends Component {
  // state use only internal values
  constructor(props) {
    super();
    this.state = {
      paths: [
        {
          id: 1,
          name: "testName",
          fullName: "fullNameTest",
          description: "descriptionTest",
          length: "500"
        },
        {
          id: 2,
          name: "testName",
          fullName: "fullNameTest",
          description: "descriptionTest",
          length: "600"
        }
      ]
    };
  }

  render() {
    let nodePath = this.state.paths.map(path => {
      return (
        <div className={path.id + "path"}>
          <Path path={path} />
        </div>
      );
    });
    return <div>{nodePath}</div>;
  }
}
