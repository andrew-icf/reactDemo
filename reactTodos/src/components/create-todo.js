import React from 'react';


export default class CreateTodo extends React.Component {
  //DONT normally do this, put state in app.js not locally
  constructor(props){
    super(props);

    this.state = {
      error: null
    };
  }
  renderError(){
    if (!this.state.error) {
      return null;
    }
    return <div style={{color : 'red'}}>{ this.state.error }</div>
  }
  render() {
    return ( //can put html in here
      <form onSubmit={this.handleCreate.bind(this)} className="form">
        <input type="text" placeholder="What do I need to do?" ref="createInput" />
        <button className="create">Create</button>
        {this.renderError()}
      </form>
    );
  }
  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({error: validateInput})
      return;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
    // console.log(this.props.createTask);
    // console.log(this.refs.createInput.value);  this is how we grab what's in the input box
  }
  validateInput(task){
    if (!task) {
      return "Please enter a task.";
    }else if (_.find(this.props.todos, todo => todo.task === task)) {
      return "Task already exists.";
    }else {
      return null //means it will return no error
    }
  }
}

// onSubmit's default behavior is to reset the page
// onSubmit allows us to hit enter and click the button
// ref is an identifier for the dom element
