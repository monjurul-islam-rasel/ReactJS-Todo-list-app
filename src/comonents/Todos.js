import React, { Component } from 'react';
import Todoitem from './Todoitem';
import propTypes from 'prop-types';

class Todos extends Component {   

    render() {
        return this.props.todos.map((todo) => (        
            <Todoitem 
                key={todo.id} 
                todo={todo}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} />
        ));      
        
    }
}

//PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired,
    markComplete: propTypes.func.isRequired,
    delTodo: propTypes.func.isRequired
}

export default Todos;
