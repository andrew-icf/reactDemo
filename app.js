// let element = React.createElement('h1', null, 'Hello World');
// let container = document.getElementById('hello');
// ReactDOM.render(element, container);
//A better way to do the above not addressing the actual state of things
// ReactDOM.render(
//   React.createElement('h1', null, "Hello World"),
//   document.getElementById('hello')
// );
let Hello = React.createClass({
    getInitialState: function() {
        return {
            content: '',
            greeting: 'hello'
        }
    },
    handler: function(event) {
        let nextState = {
            content: event.target.value
        }
        this.setState(nextState)
    },
    render: function() { //can only be one render function anthing happening on the view has to happen within here
        let message;
        if (this.state.content.trim() === '') {
            message = "Hello?"
        } else if (this.state.content === 'pasta') {
          message = "I love PASTA!!!"
        }else {
            message = 'Hello ' + this.state.content
        }
        return React.createElement('div', null,
            React.createElement('h1', null, message),
            React.createElement('span', null,
                React.createElement('input', {
                    onChange: this.handler,
                    type: 'text',
                    value: this.state.content
                })
            )
        )
    }
});

ReactDOM.render(
  React.createElement(Hello),
  document.getElementById('hello')
);
