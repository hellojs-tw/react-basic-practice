import React from 'react'
import TodoItem from './TodoItem.jsx'

class TodoList extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={{marginTop:"15px"}}>
        {
          this.props.list.map(
            (ele, index, array) => {
              return (<TodoItem text={ele} idx={index} key={index} removeElement={this.props.removeElement}/>);
            }
          )
        }
      </div>
    );
  }
}

export default TodoList;