import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');
    // console.log(this.props.todos); comes in as props
    // anytime you iterate in react you need to give it a key
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} //.map() gives a second param of index
      {...todo} {...props}/>);
  }

  render() {

    return ( //can put html in here
      <table>
        <TodosListHeader />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
