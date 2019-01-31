import * as React from "react";
import "./style.css";

export interface Props {
  backgroundImage: string,
  children: any
}
function Hero({ backgroundImage, children }: Props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {children}
    </div>
  );
}

export default Hero;