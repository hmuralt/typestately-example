import { createStore } from "redux";
import { CoreRegistry } from "typestately";

export function setupMainStore() {
    const store = createStore((state) => state);

    store.subscribe(() => {
        // Just for testing/demo purpose to see how the store is changing
        // tslint:disable-next-line:no-console
        console.log(store.getState());
    })

    return CoreRegistry.registerStore(store, {});
}
