
import { DecoratedStateHandler, StateHandler, Reducer, registerOnStore, Nested } from "typestately";
import storeIds from "stores/StoreIds";
import Status from "components/Loader/State/Status";
import LoaderStateHandler from "components/Loader/State/LoaderStateHandler";
import { ChangeAction, ActionType } from "./CounterActions";
import State, { defaultState } from "./CounterState";

@DecoratedStateHandler
class CounterStateHandler extends StateHandler<State, ActionType> {
    // Ideally injected...
    @Nested
    public readonly loaderStateHandler: LoaderStateHandler;

    constructor(loaderStateHandler: LoaderStateHandler) {
        super("counter", defaultState);

        this.loaderStateHandler = loaderStateHandler;
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
        this.loaderStateHandler.dispatchSetStatusAction(Status.Updating);
        return new Promise<void>((resolve) => {
            window.setTimeout(
                () => {
                    this.dispatchIncrement(clicked);
                    this.loaderStateHandler.dispatchSetStatusAction(Status.Done);
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

const counterStateHandler = new CounterStateHandler(new LoaderStateHandler());

registerOnStore(storeIds.Main, counterStateHandler);

export default counterStateHandler;