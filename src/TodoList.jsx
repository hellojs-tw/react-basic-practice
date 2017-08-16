import React from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
        {this.props.todos.map((todo,i)=>{
          return(
            <TodoItem    value={todo} deleteToDo={this.props.deleteToDo} />
          );
        })}
      </div>
    );
  }
}

export default TodoList;