import React from 'react'

class TodoItem extends React.Component {
  constructor(props){
    super(props)
  }

  removeTode = () => {
    this.props.removeTode(this.props.pid)
  }

  render() {
    return (
      <div>
        <ul>
          <li style={{fontSize:22,listStyle:'none'}}><span style={{marginRight: 30}}>{this.props.pid+1}</span>{this.props.todo}
            <i className='fa fa-times' style={{fontSize:22,margin:10,color:'#f24'}} onClick={this.removeTode}></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default TodoItem;
