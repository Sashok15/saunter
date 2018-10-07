import React, { Component } from "react";

export default class SearchPath extends Component {
  render() {
    return (
      <div className="filter-list">
        <form>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search"
              onChange={this.filterList}
            />
          </fieldset>
        </form>
      </div>
    );
  }
}
