import * as React from "react";

export interface Props {

}

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Container;
