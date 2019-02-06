import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
    this.delete = this.delete.bind(this);
  }
  like = () => {
    console.log('like');

    this.setState({
      likes: this.state.likes + 1
    });
  };

  delete() {
    this.props.delete(this.props.index);
  }

  render() {
    return (
      <div className="status">
        <div className="close" onClick={this.delete}>
          X
        </div>
        <p>{this.props.myText}</p>
        <p>
          <button onClick={this.like}>{this.state.likes} Likes</button>
        </p>
      </div>
    );
  }
}
export default Status;
