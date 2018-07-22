import * as React from "react";
import { WithStateToProps } from "typestately";
import WithLoaderStateHandler from "./WithLoaderStateHandler";
import Loader, { Props } from "./Loader";

export default function withLoader(withLoaderStateHandler: WithLoaderStateHandler) {
    return <TProps extends {}>(Component: React.ComponentType<TProps>) => {

        const LoaderContainer: React.StatelessComponent<Props> = (ownProps) => (
            <Loader status={ownProps.status}><Component {...ownProps} /></Loader>
        );

        return WithStateToProps(
            withLoaderStateHandler.stateProvider,
            (state): Props => {
                return {
                    ...state
                };
            }
        )(LoaderContainer);
    };
}