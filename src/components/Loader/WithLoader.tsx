import * as React from "react";
import { withStateToProps } from "typestately";
import LoaderStateHandler from "./State/LoaderStateHandler";
import LoaderState from "./State/LoaderState";
import Loader, { Props } from "./Loader";

export default function withLoader(withLoaderStateHandler: LoaderStateHandler) {
  return <TProps extends {}>(Component: React.ComponentType<TProps>) => {
    const LoaderContainer: React.StatelessComponent<Props & TProps> = (ownProps) => (
      <Loader status={ownProps.status}>
        <Component {...ownProps} />
      </Loader>
    );

    return withStateToProps<LoaderState, Props & TProps, TProps>(
      withLoaderStateHandler.state,
      withLoaderStateHandler.state$,
      (state, ownProps): Props & TProps => {
        return {
          ...state,
          ...ownProps
        };
      }
    )(LoaderContainer);
  };
}
