import React from "react";
import { StateProvider, useStateProvider } from "typestately";
import LoaderState from "./state/LoaderState";
import Loader from "./Loader";

export default function withLoader() {
  return <TProps extends {}>(Component: React.ComponentType<TProps>) => {
    const LoaderContainer: React.FC<{ loaderStateProvider: StateProvider<LoaderState> } & TProps> = (ownProps) => {
      const loaderState = useStateProvider(ownProps.loaderStateProvider);

      return (
        <Loader status={loaderState.status}>
          <Component {...ownProps} />
        </Loader>
      );
    };

    return LoaderContainer;
  };
}
