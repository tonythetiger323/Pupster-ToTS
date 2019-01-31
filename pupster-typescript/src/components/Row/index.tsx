import * as React from "react";

export interface Props {

}

function Row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`} {...props} />;
}

export default Row;
