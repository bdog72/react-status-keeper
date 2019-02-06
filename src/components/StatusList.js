import React, { Component } from 'react';
import Status from './Status';

class StatusList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return this.props.statuses.map((statusText, index) => {
      return (
        <Status
          key={index}
          index={index}
          myText={statusText}
          delete={this.props.delete}
        />
      );
    });
  }
}
export default StatusList;
