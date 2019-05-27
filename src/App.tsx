import React from "react";
import "./App.css";
import StateContextCounterCountainer from "stateContextExample/components/Counter/CounterCountainer";
import StateContextLoadingInfoContainer from "stateContextExample/components/LoadingInfo/LoadingInfoContainer";
import StateHandlerCounterCountainer from "stateHandlerExample/components/Counter/CounterCountainer";
import StateHandlerLoadingInfoContainer from "stateHandlerExample/components/LoadingInfo/LoadingInfoContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      Example using state contexts.
      <StateHandlerCounterCountainer />
      <StateHandlerLoadingInfoContainer />
      <hr />
      Example using state handlers.
      <StateContextCounterCountainer />
      <StateContextLoadingInfoContainer />
    </div>
  );
};

export default App;
