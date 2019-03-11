import React, { Component } from 'react';
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom';
import axios from 'axios';
import uuid from 'uuid';
import Todos from './comonents/Todos';
import AddTodo from './comonents/AddTodo';
import Header from './comonents/layout/Header';
import About from './comonents/pages/About';
import './App.css';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount () {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
  }

  //Mark Toggle Complete
  markComplete = (id) => {
    this.setState({ 
      todos: this.state.todos.map( todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) 
    });
  }

  //Delete Todo
  delTodo = (id) => {   
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ 
        todos: 
          [ 
            ...this.state.todos.filter( todo => todo.id !== id)   
          ] 
      })   
    )      
  }

  //add Todo

  addTodo = (title) => {
    if(title!=="") {
      
      const newTodo = {
        id: uuid.v4(),
        title,
        completed: false
      }

      //alert(newTodo.id);

      axios.post('https://jsonplaceholder.typicode.com/todos', {        
        title,
        completed: false,
        
      })
        .then(res => this.setState({          
          todos: [...this.state.todos, newTodo]
          // todos: [...this.state.todos, res.data] // server response 
        }))   
    }
    else {
      alert('Please Enter Note');
    }
  }

  render() {
    return (
      <HashRouter>
        <div className="App">
          <div className="container">
            <Header />
              <Route exact path="/" render={props =>(
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />            
                    <Todos 
                      todos={this.state.todos}
                      markComplete={this.markComplete} 
                      delTodo={this.delTodo}/>
                  </React.Fragment>
                )} 
              />
              <Route path="/about" component={About} />

              
          </div>       
        </div>
      </HashRouter>
      
    );
  }
}

export default App;
