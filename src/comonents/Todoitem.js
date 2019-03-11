import React, { Component } from 'react';
import propTypes from 'prop-types';

export class Todoitem extends Component {

  getStyle = () => {
    return {
        background: '#f4f4f4',
        borderBottom: '1px solid #ccc',
        padding: '3px',
        textDecoration: this.props.todo.completed ?
        'line-through' : 'none'
    }
  }  


  render() {

    const { id, title } = this.props.todo;

    return (
      <div style={ this.getStyle() }>
        <p>
            <input 
                type="checkbox" 
                onChange={this.props.markComplete.bind(this, id)} /> 
                {' '}
            { title }
            <button 
                style={btnStyle}
                onClick={ this.props.delTodo.bind(this, id)} >
                x
            </button>
        </p>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes = {
    todo: propTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: 'white',
    border: 'none',
    padding: '5px 7px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'

}


export default Todoitem
