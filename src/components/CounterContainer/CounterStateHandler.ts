
import { DecoratedStateHandler, StateHandler, Reducer, registerOnStore } from "typestately";
import { ChangeAction, ActionType } from "./CounterActions";
import storeIds from "../../stores/StoreIds";
import State, { defaultState } from "./CounterState";

@DecoratedStateHandler
class CounterStateHandler extends StateHandler<State, ActionType> {

    constructor() {
        super("counter", defaultState);
    }

    public dispatchIncrement(clicked: Date) {
        this.dispatch<ChangeAction>({
            type: ActionType.Increment,
            clicked
        });
    }

    public dispatchDecrement(clicked: Date) {
        this.dispatch<ChangeAction>({
            type: ActionType.Decrement,
            clicked
        });
    }

    public incrementAsync(clicked: Date) {
        return new Promise<void>((resolve) => {
            window.setTimeout(
                () => {
                    this.dispatchIncrement(clicked);
                    resolve();
                },
                2000
            );
        });
    }

    @Reducer<State, ActionType>(ActionType.Increment)
    protected increment(state: State, action: ChangeAction) {
        return {
            value: state.value + 1,
            clicked: action.clicked
        };
    }

    @Reducer<State, ActionType>(ActionType.Decrement)
    protected decrement(state: State, action: ChangeAction) {
        return {
            value: state.value - 1,
            clicked: action.clicked
        };
    }
}

const counterStateHandler = new CounterStateHandler();

registerOnStore(storeIds.Main, counterStateHandler);

export default counterStateHandler;