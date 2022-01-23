import React, { Component } from "react";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChange = (value) => {
    this.setState((prevState) => ({
      [value]: prevState.value + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={this.handleChange}>
            Good
          </button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <h2>Statistics</h2>
        <ul>
          <li>good:{good}</li>
          <li>neutral:{neutral}</li>
          <li>bad:{bad}</li>
        </ul>
      </div>
    );
  }
}

export default Feedback;
