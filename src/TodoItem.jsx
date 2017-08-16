import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const {todos, deleteTodo} = this.props
    const todos = this.props.todos
    const deleteTodo = this.props.deleteTodo
    return (
      <div>
        {
          todos.map((item, idx) => {
            return (
              <div key={idx}>
                <li>{item}<button onClick={evt => deleteTodo(evt)}>X</button></li>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default TodoItem;