import React from "react";
import "./App.css";
import CounterCountainer from "components/Counter/CounterCountainer";
import LoadingInfoContainer from "components/LoadingInfo/LoadingInfoContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <CounterCountainer />
      <LoadingInfoContainer />
    </div>
  );
};

export default App;
