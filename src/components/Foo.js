import React, { Component } from "react";

export default class Foo extends Component {
  state = { value: 1 };
  constructor(props) {
    //super is used to call the constructor of component to get some functionality.
    super(props);

    console.log("Contrusctor");

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ value: 2 });
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");

    //if a function is called from another function,
    //it will point to the window/global/undefined window.

    return <button onClick={this.handleClick}>Click Me</button>;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}
