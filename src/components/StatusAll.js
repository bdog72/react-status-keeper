import React, { Component } from 'react';
import StatusList from './StatusList';
import './Status.css';

export default class StatusAll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newStatusText: '',

      statuses: [
        'I had a great lunch today',
        'I had a great beer today',
        'I had a great date today',
        'I had a great school today'
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(index) {
    let copy = [...this.state.statuses];
    copy.splice(index, 1);
    this.setState({ statuses: copy });
  }

  handleChange(ev) {
    this.setState({ newStatusText: ev.target.value });
    console.log(ev.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newStatuses = [this.state.newStatusText, ...this.state.statuses];
    this.setState({ newStatusText: '', statuses: newStatuses });
  }

  render() {
    return (
      <React.Fragment>
        <div className="status">
          <h1>Enter New Status</h1>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.newStatusText}
              placeholder="What's on Your Mind"
              onChange={this.handleChange}
            />
            <button type="submit">Add Status</button>
          </form>
        </div>
        <div className="status">
          <h1>All Statuses</h1>
          <StatusList statuses={this.state.statuses} delete={this.delete} />
        </div>
      </React.Fragment>
    );
  }
}
