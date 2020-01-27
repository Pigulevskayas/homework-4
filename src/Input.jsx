import React from "react";
import { Form } from "react-bootstrap";

/*
  Компонент Input хранит состояние input'а в this.state.value и
  нотифицирует родителя об изменение через prop onChange.

  Для решения заданий этот компонент модифицировать не требуется.
*/
export class Input extends React.Component {
  state = {
    // defaultValue - начальное состояние input'а
    value: this.props.defaultValue || ""
  };

  render() {
    return (
      <Form.Control
        type="text"
        value={this.state.value}
        onChange={e => {
          const value = e.target.value;
          this.setState(
            { value },
            /* 
                Вызываем onChange после того, как this.state обновился.
                () => this.props.onChange(e.target.value) делать нельзя, т.к. для скорости работы
                переиспользует объекты событий и очищает их между использованиями. К тому моменту,
                как обновиться this.state, объект e будет очищен. 
                Поэтому значение сохраняем заранее в переменную value, доступную за счет замыкания.
              */
            () => this.props.onChange(value)
          );
        }}
      />
    );
  }
}
