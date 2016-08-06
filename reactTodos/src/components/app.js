import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

const todos = [
  {
      task: 'Make React Todos',
      isCompleted: false
  },
  {
    task: 'Eat Dinner',
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props); // super connects to the parent it is inheriting from

    this.state = {
      todos //this works with es6, without you need todos: todos
    };
  }
  render() {
    return ( //can put html in here
      <div>
        <h1>React Todos App</h1>
        <CreateTodo
          todos={this.state.todos}
          createTask={this.createTask.bind(this)} />
        <TodosList
          todos={this.state.todos}
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)} />
      </div>
    );
  }
  toggleTask(task) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos }); //refresh set state
  }
  createTask(task){
    this.state.todos.push({
      task, // remember es2015 task: task = task
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }
  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }
  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos });
  }
}
