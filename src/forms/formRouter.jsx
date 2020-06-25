import React, { Component } from "react";
import { Link } from "react-router-dom";

class FormRouter extends Component {
  render() {
    const { name, age, mailId } = this.props.values;
    return (
      <form>
        <label className="m-1" htmlFor="name">
          Name:
          <input
            onChange={(e) => this.props.onTypo("name", e.target.value)}
            value={name}
            type="text"
            name="name"
          />
        </label>

        <label className="m-1" htmlFor="age">
          Age:
          <input
            onChange={(e) => this.props.onTypo("age", e.target.value)}
            value={age}
            type="number"
            name="age"
          />
        </label>

        <label className="m-1" htmlFor="mailId">
          Email Id:
          <input
            onChange={(e) => this.props.onTypo("mailId", e.target.value)}
            value={mailId}
            type="email"
            name="mailId"
          />
        </label>
        <Link to={this.props.path}>
          <input
            className="btn btn-dark btn-sm"
            onClick={this.props.onUpdate}
            type="button"
            name="submit"
            value="Submit"
          />
        </Link>
      </form>
    );
  }
}

export default FormRouter;
