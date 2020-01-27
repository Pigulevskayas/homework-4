import React from "react";
import { Button, Form } from "react-bootstrap";

/*
  Компонент UserForm содержит 3 input'а под ввод данных пользователя.
  Принимает prop user с начальными значениями полей.
  На submit формы (при нажатии на кнопку Save) вызывает prop onSave со значениями всех полей, собранных в один объект.

  Для решения заданий этот компонент модифицировать не требуется.
*/
export class UserForm extends React.Component {
  state = {
    ...(this.props.user
      ? this.props.user
      : {
          firstName: "",
          lastName: "",
          login: ""
        })
  };

  /*
      Один обработчик используется для всех input'ов. 
      В какое свойство this.state писать понятно из name input'а, аттрибут name совпадает с именем
      свойства в this.state.
    */
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault(); // отменяем перегрузку страницы
          this.props.onSave({ ...this.state });
        }}
      >
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            onChange={this.onChange}
            value={this.state.firstName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            onChange={this.onChange}
            value={this.state.lastName}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Login</Form.Label>
          <Form.Control
            type="text"
            name="login"
            onChange={this.onChange}
            value={this.state.login}
          />
        </Form.Group>
        <Button kind="primary" type="submit">
          Save
        </Button>
      </Form>
    );
  }
}
