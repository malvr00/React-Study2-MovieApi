import React, { Component } from "react";
import Proptypes from "prop-types";

class App extends Component {
  state = {
    count: 0,
  };
  add = () => {
    // current = this로 하지 않고 current로 직접 참조
    this.setState((current) => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  // 처음 render 됐을 때 알려줌
  componentDidMount() {
    console.log("test");
  }
  componentDidUpdate() {
    console.log("upated test method");
  }
  render() {
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>MinuS</button>
      </div>
    );
  }
}

export default App;
