import React, { Component } from "react";
import { Link } from "react-router-dom";

class List extends Component {
  listOut = (tableRow) => {
    let keyValue = 0;
    return Object.keys(tableRow).map((key) => (
      <td key={keyValue++}>{tableRow[key]}</td>
    ));
  };
  render() {
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email Id</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props.employees.map((element) => (
              <tr key={element.id}>
                {this.listOut(element)}
                <td key="edit">
                  <Link to="/">
                    <button
                      onClick={() => this.props.onEdit(element.id)}
                      className="btn btn-sm btn-dark"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td key="delete">
                  <button
                    onClick={() => this.props.onDelete(element.id)}
                    className="btn btn-sm btn-dark"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/">
          <button className="btn btn-dark">Add New Entry</button>
        </Link>
      </>
    );
  }
}

export default List;
