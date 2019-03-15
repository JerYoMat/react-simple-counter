import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Child({ onAction }) {
  return (
    <button onClick={onAction}>
      Click to increment
    </button>
  );
}


class CountingParent extends React.Component {
  state = {
    actionCount: 0
  }
  handleAction = (action) => {
    this.setState({
      actionCount: this.state.actionCount + 1
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}





ReactDOM.render(<CountingParent />, document.getElementById('root'));


