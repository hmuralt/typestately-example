
import { DecoratedStateHandler, StateHandler, Reducer, registerOnStore } from "typestately";
import storeIds from "../../stores/StoreIds";
import { UpdateAction, ActionType } from "./ConfigurationActions";
import State, { defaultState } from "./ConfigurationState";


@DecoratedStateHandler
class ConfigurationStateHandler extends StateHandler<State, ActionType> {

    constructor() {
        super("configuration", defaultState);
    }

    public dispatchUpdate(configuration: Partial<State>) {
        this.dispatch<UpdateAction<State>>({
            type: ActionType.UpdateConfiguration,
            configuration
        });
    }

    @Reducer<State, ActionType>(ActionType.UpdateConfiguration)
    protected update(state: State, action: UpdateAction<State>) {
        return {
            ...state,
            ...action.configuration
        };
    }
}

const configurationStateHandler = new ConfigurationStateHandler();

registerOnStore(storeIds.Main, configurationStateHandler);

export default configurationStateHandler;