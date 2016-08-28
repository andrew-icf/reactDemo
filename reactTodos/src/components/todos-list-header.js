import React from 'react';

export default class TodosListHeader extends React.Component {
  render() {
    return ( //can put html in here
        <thead>
          <tr>
            <th>Task</th>
            <th className="action">Action</th>
          </tr>
        </thead>
    );
  }
}
