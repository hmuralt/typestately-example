import * as React from "react";
import "./App.css";
import CounterCountainer from "./components/CounterContainer/CounterCountainer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CounterCountainer />
      </div>
    );
  }
}

export default App;