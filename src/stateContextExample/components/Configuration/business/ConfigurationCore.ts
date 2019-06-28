import { Hub, createStateDefinition } from "typestately";
import storeContexts from "stores/StoreContexts";
import State, { defaultState } from "./ConfigurationState";
import { ActionType, UpdateAction } from "./ConfigurationActions";
import reducer from "./ConfigurationReducer";

const stateDefinition = createStateDefinition("configuration", defaultState).setReducer(reducer);

export function createConfigurationCore(hub: Hub) {
  const stateContext = stateDefinition.attachTo(hub);

  function UpdateConfiguration(configuration: Partial<State>) {
    stateContext.dispatch<UpdateAction<State>>({
      type: ActionType.UpdateConfiguration,
      configuration
    });
  }

  return {
    state: stateContext.state,
    state$: stateContext.state$,
    UpdateConfiguration
  };
}

export const configurationCore = createConfigurationCore(storeContexts.StateContextExample.hub);
