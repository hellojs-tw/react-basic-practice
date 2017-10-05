import React from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.todos.map((data, index) => {
            return <TodoItem data={data} remove={() => this.props.removeTodo(index)}/>
          })
        }
      </div>
    );
  }
}

export default TodoList;