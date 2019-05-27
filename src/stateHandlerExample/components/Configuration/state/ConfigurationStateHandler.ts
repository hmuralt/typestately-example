import { StateHandler } from "typestately";
import storeContexts from "stores/StoreContexts";
import { UpdateAction, ActionType } from "./ConfigurationActions";
import State, { defaultState } from "./ConfigurationState";

class ConfigurationStateHandler extends StateHandler<State, ActionType> {
  constructor() {
    super("configuration", defaultState);
  }

  public update(configuration: Partial<State>) {
    this.dispatch<UpdateAction<State>>({
      type: ActionType.UpdateConfiguration,
      configuration
    });
  }

  @StateHandler.reducer<State, ActionType>(ActionType.UpdateConfiguration)
  protected reduceUpdate(state: State, action: UpdateAction<State>) {
    return {
      ...state,
      ...action.configuration
    };
  }
}

const configurationStateHandler = new ConfigurationStateHandler();
configurationStateHandler.attachTo(storeContexts.StateHandlerExample.hub);
export default configurationStateHandler;
