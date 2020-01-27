import React from "react";
import ReactDOM from "react-dom";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Redirect, NavLink } from "react-router-dom";
import { Task1 } from "./task1";
import { Task2 } from "./task2";
import { Task3 } from "./task3";
import { Task4 } from "./task4";
import "bootstrap/dist/css/bootstrap.min.css";

const tasks = [Task1, Task2, Task3, Task4];

const App = () => (
  <BrowserRouter>
    <Navbar
      sticky="top"
      bg="dark"
      variant="dark"
      onSelect={taskIndex => this.setState({ taskIndex })}
    >
      <Nav className="mr-auto">
        {tasks.map((task, index) => (
          <Nav.Link as={NavLink} key={index} to={`/task${index + 1}`}>
            {task.title}
          </Nav.Link>
        ))}
      </Nav>
    </Navbar>
    <Container>
      <Route path="/" exact render={() => <Redirect to="/task1" />} />
      {tasks.map((Task, index) => (
        <Route
          path={`/task${index + 1}`}
          render={() => (
            <>
              <Row>
                <h6>{Task.description}</h6>
              </Row>
              <Row>
                <Task />
              </Row>
            </>
          )}
        />
      ))}
    </Container>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
