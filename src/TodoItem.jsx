import React from 'react'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
  }

  handleClick = (event) => {
    this.props.removeElement(this.props.idx);
  }
  
  render() {
    return (
      <div style={{marginTop:"5px"}}>
        <button onClick={this.handleClick}> 刪除 </button>
        <a style={{marginLeft:"5px"}}>{this.props.text}</a>
      </div>
    );
  }
}

export default TodoItem;