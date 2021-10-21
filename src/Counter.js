import React from "react";

export default class Counter extends React.Component {
  formatCounter = () => {
    return this.props.value === 0 ? "Zero" : this.props.value;
  };

  componentWillUnmount() {
    console.log("component died, ", this.props.id);
  }

  render() {
    return (
      <div className="mb-3">
        <span
          className={`p-2 mr-2 ${
            this.props.value == 0 ? "bg-yellow-500" : "bg-green-500"
          }`}
        >
          Counter: {this.formatCounter()}
        </span>
        <button
          className="bg-blue-500 p-2"
          onClick={() => this.props.onIncrease(this.props.id)}
        >
          Increase
        </button>
        <button
          className="bg-green-500 p-2"
          onClick={() => this.props.onDecrease(this.props.id)}
        >
          Decrease
        </button>
        <button
          className="bg-red-500 p-2"
          onClick={() => this.props.onRemove(this.props.id)}
        >
          Remove
        </button>
      </div>
    );
  }
}
