import * as React from "react";
import "./App.css";
import CounterCountainer from "./components/Counter/CounterCountainer";
import LoadingInfoContainer from "components/LoadingInfo/LoadingInfoContainer";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <CounterCountainer />
        <LoadingInfoContainer />
      </div>
    );
  }
}

export default App;
