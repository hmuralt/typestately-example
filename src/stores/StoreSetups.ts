import { routerMiddleware, routerReducer  } from "react-router-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { CoreRegistry } from "typestately";
import history from "../history";

export function setupMainStore() {
    const initalReducers = {
        router: routerReducer
    };

    const store = createStore(combineReducers(initalReducers), applyMiddleware(routerMiddleware(history)));
    store.subscribe(() => {
        // tslint:disable-next-line:no-console
        console.log(store.getState());
    })
    return CoreRegistry.registerStore(store, initalReducers);
}
