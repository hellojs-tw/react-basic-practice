import React from 'react'

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.remove}>刪除</button>
        {this.props.data}
      </div>
    );
  }
}

export default TodoItem;