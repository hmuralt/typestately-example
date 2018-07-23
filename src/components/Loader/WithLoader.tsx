import * as React from "react";
import { withStateToProps } from "typestately";
import LoaderStateHandler from "./State/LoaderStateHandler";
import Loader, { Props } from "./Loader";

export default function withLoader(withLoaderStateHandler: LoaderStateHandler) {
    return <TProps extends {}>(Component: React.ComponentType<TProps>) => {

        const LoaderContainer: React.StatelessComponent<Props> = (ownProps) => (
            <Loader status={ownProps.status}><Component {...ownProps} /></Loader>
        );

        return withStateToProps(
            withLoaderStateHandler.stateProvider,
            (state): Props => {
                return {
                    ...state
                };
            }
        )(LoaderContainer);
    };
}