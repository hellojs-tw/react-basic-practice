import React from 'react'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
  }
  removeTodo = () => {
    this.props.removeTodo(this.props.position);
    console.log(this.props.position);
  }
  
  render() {
    return (
      <div>
        <ul>
          <li><span style={{fontSize:22}}>{this.props.todo}</span>
          <img style={{width:18,height:18}} src={"http://findicons.com/files/icons/573/must_have/48/delete.png"} onClick={this.removeTodo}/></li>
        </ul>  
      </div>
    );
  }
}

export default TodoItem;