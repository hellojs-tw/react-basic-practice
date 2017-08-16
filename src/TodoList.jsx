import React from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const todos = this.props.todos
    const {todos, deleteTodo} = this.props
    return (
      <div>
        <TodoItem todos={todos} deleteTodo={deleteTodo}/>
      </div>
    );
  }
}

export default TodoList;