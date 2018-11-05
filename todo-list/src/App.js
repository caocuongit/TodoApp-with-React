import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }]
    };
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault()

    //C1

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    })

    //C2
    // const todos = this.state.todos.slice();
    // todos.push({
    //   title: this.state.newTodo,
    //   done: false
    // });
    // this.setState({
    //   todos
    // });

    //C3
    // this.state.todos.push({
    //   title: this.state.newTodo,
    //   done: false
    // })
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos];
    todos[index] = {
      ...todos[index],
      done: event.target.checked
    };
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title,
        done: true
      };
    });
    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <NewTodoForm
            newTodo={this.state.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)}
          />
          <input type="button" onClick={() => this.allDone()} value="AllDone" />
          <TodoList
            todos={this.state.todos}
            toggleTodoDone={this.toggleTodoDone.bind(this)}
            removeTodo={this.removeTodo.bind(this)}
          />
        </div>
      </div>
    );
  }
}
export default App;
