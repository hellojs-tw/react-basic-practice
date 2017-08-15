import React from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((value, index) => (
          <TodoItem key={index} index={index} value={value} delTodo={this.props.delTodo} />
        ))}
      </div>
    );
  }
}

export default TodoList;