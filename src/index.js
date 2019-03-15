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

function ResetButton({ onAction }) {
  return (
    <button onClick={onAction}>
      Reset!
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
  handleReset = (action) => {
    this.setState({
      actionCount: 0
    });
  }

  render() {
    return (
      <div>
        <Child onAction={this.handleAction} />
        <ResetButton onAction={this.handleReset} />
        <p>Clicked {this.state.actionCount} times</p>
      </div>
    );
  }
}

const Page = () => (
  <div>
    <CountingParent />
    <CountingParent />
    <CountingParent />
  </div>
)





ReactDOM.render(<Page />, document.getElementById('root'));


