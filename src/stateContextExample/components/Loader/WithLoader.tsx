import * as React from "react";
import { withStateToProps, StateProvider } from "typestately";
import LoaderState from "./business/LoaderState";
import Loader, { Props } from "./Loader";

export default function withLoader(loaderStateProvider: StateProvider<LoaderState>) {
  return <TProps extends {}>(Component: React.ComponentType<TProps>) => {
    const LoaderContainer: React.StatelessComponent<Props & TProps> = (ownProps) => (
      <Loader status={ownProps.status}>
        <Component {...ownProps} />
      </Loader>
    );

    return withStateToProps<LoaderState, Props & TProps, TProps>(
      loaderStateProvider,
      (state, ownProps): Props & TProps => {
        return {
          ...state,
          ...ownProps
        };
      }
    )(LoaderContainer);
  };
}
