import React, { useContext } from "react";
import { Alldata } from "../Context/Context";
import "./PopUp.css";

function PopUp() {
  const { addsongs } = useContext(Alldata);
  return (
    <>
      <div className={`${!addsongs ? "active" : ""} show`}>Test</div>
    </>
  );
}

export default PopUp;
