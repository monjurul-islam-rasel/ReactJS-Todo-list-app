import React, { Component } from 'react';
import propTypes from 'prop-types';

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({ [e.target.name] : e.target.value });
    

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{display: 'flex', margin: '5px 0px'}}>
            <input 
                type="text" 
                name="title" 
                style={{flex:"10", padding:"5px"}}
                placeholder="add todo........"
                value={this.state.title}
                onChange={this.onChange}
            />

            <input 
                type="submit"
                value="Submit"
                className="btn"
                style={{flex: "1"}}
            />
        </form>
        
        )
    }
}

//PropTypes
AddTodo.propTypes = {
    addTodo: propTypes.func.isRequired
}

export default AddTodo
