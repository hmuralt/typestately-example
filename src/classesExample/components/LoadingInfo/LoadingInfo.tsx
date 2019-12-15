import React from "react";

export interface Props {
  updatingCount: number;
}

export default (props: Props) => <div>Updating count: {props.updatingCount}</div>;
