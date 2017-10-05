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
TodoList.defaultProps = {
  todos: [1,2,3,4,5,6]
}

export default TodoList;