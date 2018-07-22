
import { DecoratedStateHandler, StateHandler, Reducer, registerOnStore, Nested } from "typestately";
import storeIds from "stores/StoreIds";
import WithLoaderStateHandler from "components/Loader/WithLoaderStateHandler";
import { ChangeAction, ActionType } from "./CounterActions";
import State, { defaultState } from "./CounterState";
import { Status } from "../../Loader/Loader";

@DecoratedStateHandler
class CounterStateHandler extends StateHandler<State, ActionType> {
    // Ideally injected...
    @Nested
    public readonly withLoaderStateHandler: WithLoaderStateHandler;

    constructor(withLoaderStateHandler: WithLoaderStateHandler) {
        super("counter", defaultState);

        this.withLoaderStateHandler = withLoaderStateHandler;
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
        this.withLoaderStateHandler.dispatchSetStatusAction(Status.Updating);
        return new Promise<void>((resolve) => {
            window.setTimeout(
                () => {
                    this.dispatchIncrement(clicked);
                    this.withLoaderStateHandler.dispatchSetStatusAction(Status.Done);
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

const counterStateHandler = new CounterStateHandler(new WithLoaderStateHandler());

registerOnStore(storeIds.Main, counterStateHandler);

export default counterStateHandler;