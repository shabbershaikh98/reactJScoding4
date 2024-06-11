import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)

class ClickCounter extends Component {
  state = { count: 0 };

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>The button has been clicked {count} times</h1>
        <p>Click the button to increase the count</p>
        <button type="button" onClick={this.onIncrement}>Click Me</button>
      </div>
    );
  }
}

export default ClickCounter;