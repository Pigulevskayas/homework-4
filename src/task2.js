import React from "react";
import { Col, Form } from "react-bootstrap";

/*
  В первом задании нужно реализовать компонент State, который использует шаблон
  render prop. Он передает в функцию состояние и функцию его изменения. Так же
*/

class State extends React.Component {
  render() {
    return this.props.children({
      /* 
        Для выполнения задания нужно заменить state и setState.
        Начальное значение state, которое будет использовано при первом рендеринге
        надо взять из this.props.initialState по таким правилам:
        - если initialState не задан, то начально значение state - {} (пустой объект) 
        - если initialState объект (не функция, не массив) то state - копия initalState
        - если initialState не объект (примитивное значение, массив, функция), то state 
          будет {value: this.props.initialState}
        Для того, чтобы отличить объекты, созданные с помощью {} от других объектов 
        (массивов, функций, Date и т.п.) воспользуйтесь функцией isPlainObject 
        (https://gomakethings.com/how-to-check-if-something-is-an-object-with-vanilla-javascript/)
      */
      state: {},
      setState: () => {}
    });
  }
}

/*
  Следующие компоненты для выполнения задания менять не нужно.
*/

const StatelessInput = ({ value = "", onChange }) => (
  <Form.Control
    type="text"
    value={value}
    onChange={e => onChange(e.target.value)}
  />
);

// Форма настроек приложения
const SettingsForm = ({
  isNotificationEnabled = false, // разрешены ли нотификации
  isOnlineStatusVisible = false, // видят ли другие пользователи, находится ли данный пользователь в сети
  onNotificationSettingChanged,
  onOnlineStatusSettingChanged
}) => (
  <Form>
    <Form.Group>
      <Form.Label>Нотификаии включены</Form.Label>
      <Form.Check
        value={isNotificationEnabled}
        onChange={e => onNotificationSettingChanged(e.target.checked)}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Другие пользователи видят, что вы в сети</Form.Label>
      <Form.Check
        value={isOnlineStatusVisible}
        onChange={e => onOnlineStatusSettingChanged(e.target.checked)}
      />
    </Form.Group>
  </Form>
);

export const Task2 = () => (
  <>
    <Col>
      <Form>
        <Form.Group>
          <Form.Label>Input без состояния</Form.Label>
          <State initialState="type something here...">
            {({ state, setState }) => {
              console.log("input state", state);
              return (
                <StatelessInput
                  value={state.value}
                  onChange={value => setState({ value })}
                />
              );
            }}
          </State>
        </Form.Group>
      </Form>
    </Col>
    <Col>
      <State
        initialState={{
          isNotificationEnabled: true,
          isOnlineStatusVisible: true
        }}
      >
        {({ state, setState }) => {
          console.log("settings form state", state);
          return (
            <SettingsForm
              {...state}
              onNotificationSettingChanged={value =>
                setState({ isNotificationEnabled: value })
              }
              onOnlineStatusSettingChanged={value =>
                setState({ isOnlineStatusVisible: value })
              }
            />
          );
        }}
      </State>
    </Col>
  </>
);

Task2.title = "2. Render prop. State";
Task2.description =
  "Должно быть возможно вводить текст в input. " +
  "state в консоли должен меняться при вводе в input и при нажатии на checkbox";
