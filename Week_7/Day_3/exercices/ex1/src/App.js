import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>
          These two counters are inside the same error boundary. If one crashes,
          the error boundary will replace both of them.
        </p>
        <ErrorBoundary>
          <BuggyCounter /> <br />
          <BuggyCounter />
        </ErrorBoundary>
        <hr />

        <p>
          These two counters are each inside of their own error boundary. So if
          one crashes, the other is not affected.
        </p>

        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <br />
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <hr />
        <p>
          This counter is not inside of boundary. So if crashes, all other
          components are deleted.
        </p>
        <BuggyCounter />
      </div>
    );
  }
}

export default App;
