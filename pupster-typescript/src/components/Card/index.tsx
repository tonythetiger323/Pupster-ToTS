import * as React from "react";
import CardBtn from "../CardBtn";
import "./style.css";

export interface Props {
  image: string,
  handleBtnClick: any
}
function Card({ image, handleBtnClick }: Props) {
  return (
    <div
      className="card"
      style={{
        backgroundImage: image ? `url(${image})` : "none"
      }}
    >
      {!image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />}
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="pass"
      />
      <CardBtn
        style={{ opacity: image ? 1 : 0 }}
        onClick={handleBtnClick}
        data-value="pick"
      />
    </div>
  );
}

export default Card;
