import React from 'react'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
  }
  deleteToDo = ()=> {
    this.props.deleteToDo(this.props.position);
  };
  render() {
    return (
      <div>
        <span>{this.props.value}</span><button onClick={this.deleteToDo}>刪除</button>
      </div>
    );
  }
}

export default TodoItem;