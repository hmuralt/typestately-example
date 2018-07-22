import { createStore } from "redux";
import { coreRegistry } from "typestately";

export function setupMainStore() {
    const store = createStore((state) => state);

    store.subscribe(() => {
        // Just for testing/demo purpose to see how the store is changing
        // tslint:disable-next-line:no-console
        console.log(store.getState());
    })

    return coreRegistry.registerStore(store, {});
}
