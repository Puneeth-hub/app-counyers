import { Component } from "react";

import { BsFillStarFill } from "react-icons/bs";

import "./index.css";

class Counter extends Component {
  state = {
    count: 0,
    isColor: true,
  };

  onIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    const { count, isColor } = this.state;

    return (
      <div className="container">
        <h1 className="heading">
          Counter Strike <BsFillStarFill className="star" />
          <span className={count > 0 ? "positive" : "negative"}>{count}</span>
        </h1>
        <input
          type="text"
          value={count}
          className={isColor ? "positive" : "negative"}
        />
        <div className="child">
          <button
            type="button"
            className="increment"
            onClick={this.onIncrement}
          >
            Increase
          </button>
          <button
            type="button"
            className="decrement"
            onClick={this.onDecrement}
          >
            Decrease
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
