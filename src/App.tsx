import React from "react";
import "./App.css";
import StateHandlerCounterCountainer from "classesExample/components/Counter/CounterCountainer";
import StateHandlerLoadingInfoContainer from "classesExample/components/LoadingInfo/LoadingInfoContainer";
import StateContextCounterCountainer from "functionsExample/components/Counter/CounterCountainer";
import StateContextLoadingInfoContainer from "functionsExample/components/LoadingInfo/LoadingInfoContainer";
import {
  configurationStateHandlerContext,
  createConfigurationStateHandler
} from "functionsExample/components/Configuration/state/ConfigurationStateHandler";
import storeContexts from "stores/StoreContexts";

const App: React.FC = () => {
  return (
    <div className="App">
      Example using classes.
      <StateHandlerCounterCountainer />
      <StateHandlerLoadingInfoContainer />
      <hr />
      Example using functions.
      <configurationStateHandlerContext.Provider
        value={createConfigurationStateHandler(storeContexts.FunctionsExample.hub)}
      >
        <StateContextCounterCountainer />
        <StateContextLoadingInfoContainer />
      </configurationStateHandlerContext.Provider>
    </div>
  );
};

export default App;
