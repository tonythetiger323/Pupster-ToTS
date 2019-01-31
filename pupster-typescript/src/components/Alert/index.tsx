import * as React from "react";

export interface Props {
  type: string,
  style: object,
  children: string
}
function Alert({ type, style, children }: Props) {
  return (
    <div
      role="alert"
      className={`alert alert-${type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...style }}
    >
      {children}
    </div>
  );
}

export default Alert;
