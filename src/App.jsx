import React from 'react'
import TodoList from './TodoList.jsx'
import TodoAddForm from './TodoAddForm.jsx'

class TodoApp extends React.Component {
  state = {
    todos:[],
  }
  addTodo = (val) =>{
    this.state.todos.push(val);
    this.setState({todos:this.state.todos});
  }
  removeTodo = (id) => {
    this.state.todos.splice(id,1);
    this.setState({todos:this.state.todos});
  }


  render() {
    return (
      <div>
        <h2>Todo App</h2>
          <TodoAddForm todos={this.state.todos} addTodo={this.addTodo}/>
          <TodoList todos={this.state.todos} removeTodo={this.removeTodo}/>
      </div>
    );
  }
}

export default TodoApp;