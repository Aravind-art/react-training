import React, { Component } from "react";
import FormRouter from "./formRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import List from "./list";
import { Alert } from "react-bootstrap";
class Forms extends Component {
  state = {
    employees: [],
    individual: {
      name: "",
      age: "",
      mailId: "",
    },
    newID: 0,
    err_message: "",
  };
  generateID = () => {
    let id = Math.floor(Math.random() * 100) + 1;
    if (this.state.employees.some((employee) => employee.id === id))
      id = this.generateID();

    return id;
  };
  exists = (mailId) =>
    !this.state.newID
      ? !this.state.employees.some((element) => element.mailId === mailId)
      : true;
  handleUpdate = (identity) => {
    const regx_mail = /^([\w\d _ -][\w\d . _ -]+)@([\w\d _-]+).([a-z]{2,20})(\.[a-z]{2,10})$/;
    const { name, age, mailId } = this.state.individual;
    if (!(name && age && mailId)) {
      this.setState({ err_message: "enter all the fields" });
    } else if (!regx_mail.test(mailId)) {
      this.setState({ err_message: "invalid email address" });
    } else {
      const employees = this.state.employees.filter(
        (employee) => employee.id !== identity
      );
      if (!employees.some((employee) => employee.mailId === mailId))
        this.setState({
          employees: [...employees, { id: identity, ...this.state.individual }],
          individual: { name: "", age: "", mailId: "" },
          newID: 0,
        });
      else {
        this.setState({
          individual: {
            ...this.state.individual,
            mailId: "",
          },
          err_message: "Email id already exists",
        });
      }
    }
  };
  handleChange = (key, value) => {
    this.setState({ individual: { ...this.state.individual, [key]: value } });
  };
  handleEdit = (identity) => {
    this.setState({
      newID: identity,
      individual: {
        ...this.state.employees.find((employee) => employee.id === identity),
      },
    });
  };
  handleDelete = (identity) => {
    const employees = this.state.employees.filter(
      (employee) => employee.id !== identity
    );
    this.setState({ employees });
  };
  render() {
    const { name, age, mailId } = this.state.individual;
    const identity = this.state.newID || this.generateID();
    const evaluate = name && age && mailId && this.exists(mailId);
    const path = evaluate ? "/table" : "/";
    return (
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <FormRouter
              onUpdate={() => this.handleUpdate(identity)}
              onTypo={this.handleChange}
              values={this.state.individual}
              path={path}
            />
          )}
        />
        <Route
          path="/table"
          render={() => (
            <List
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
              employees={this.state.employees}
            />
          )}
        />
        {this.state.err_message && (
          <Alert
            variant="danger"
            onClose={() => {
              this.setState({ err_message: "" });
            }}
            dismissible
          >
            {this.state.err_message}
          </Alert>
        )}
      </Router>
    );
  }
}

export default Forms;
