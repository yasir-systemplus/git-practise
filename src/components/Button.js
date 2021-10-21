import React, { PureComponent } from "react";

export default class Button extends PureComponent {
  render() {
    return (
      <button
        className="bg-red-500 p-2"
        onClick={() => this.props.onRemove(this.props.id)}
      >
        Remove
      </button>
    );
  }
}
