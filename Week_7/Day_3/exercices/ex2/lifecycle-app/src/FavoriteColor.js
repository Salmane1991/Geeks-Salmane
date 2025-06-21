import React, { useDebugValue } from "react";
class Child extends React.Component {
  componentWillUnmount() {
    alert("Component is being unmounted");
  }
  render() {
    return <h1>Hello World!</h1>;
  }
}

class FavoriteColor extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "Red",
      show: true,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ color: "Yellow" });
    }, 2000);
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    console.log("Before update, previous color was:", prevState.color);
    return null;
  }

  componentDidUpdate() {
    console.log("after update");
  }

  updateValue() {
    this.setState({ show: false });
  }
  render() {
    return (
      <>
        <h1>My Favorite Color is {this.state.color}</h1>
        <button onClick={() => this.setState({ color: "Blue" })}>
          Change Color
        </button>
        {this.state.show && <Child />}
        <button onClick={() => this.updateValue()}>Delete Header</button>
      </>
    );
  }
}

export default FavoriteColor;
