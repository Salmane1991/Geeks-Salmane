import React, { Component } from "react";

class MyMessage extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch("http://localhost:5000/api/hello");
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return <h1>{this.state.message}</h1>;
  }
}

export default MyMessage;
