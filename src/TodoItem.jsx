import React from 'react'

class TodoItem extends React.Component {

  deleteTodo = () => {
    this.props.delTodo(this.props.index);
    //console.log('TodoItem index:', this.props.index);
  };

  render() {
    return (
      <div>
          <li>{this.props.value}<button onClick={this.deleteTodo}>Delete</button></li>
      </div>
    );
  }
}

export default TodoItem;