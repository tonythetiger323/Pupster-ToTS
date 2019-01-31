import * as React from "react";
import "./style.css";

export interface Props {

}

function Wrapper(props) {
  return <main className="wrapper" {...props} />;
}

export default Wrapper;
