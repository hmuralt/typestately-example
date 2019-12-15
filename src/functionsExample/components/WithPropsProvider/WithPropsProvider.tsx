import React from "react";

export default function withPropsProvider<TProvidedProps, TProps>(propsProvider: (ownProps: TProps) => TProvidedProps) {
  return (Component: React.ComponentType<TProps>) => {
    const PropsProviderContainer: React.FC<TProps> = (ownProps) => {
      const providedProps = propsProvider(ownProps);

      return <Component {...ownProps} {...providedProps} />;
    };

    return PropsProviderContainer;
  };
}
