import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };
  }

  increase = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrease = () => {
    if (!(this.state.value <= 0))
      this.setState({ value: this.state.value - 1 });
  };

  formatCounter = () => {
    //ternary operator
    return this.state.value === 0 ? "Zero" : this.state.value;
  };

  render() {
    // can't use const for contcatination.

    // let classes = "p-2 mr-2 ";

    // if (this.state.value == 0) {
    //   classes += "bg-yellow-500";
    // } else {
    //   classes += "bg-green-500";
    // }

    return (
      <div className="mb-3">
        {this.state.value != 0 && (
          <span>
            <span
              className={`p-2 mr-2 ${
                this.state.value == 0 ? "bg-yellow-500" : "bg-green-500"
              }`}
            >
              Counter: {this.formatCounter()}
            </span>
            <button className="bg-blue-500 p-2" onClick={this.increase}>
              Increase
            </button>
            <button className="bg-red-500 p-2" onClick={this.decrease}>
              Decrease
            </button>
          </span>
        )}
      </div>
    );
  }
}
