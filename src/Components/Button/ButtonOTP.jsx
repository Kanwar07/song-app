import React from "react";
import buttonotpstyle from "./Button.module.css";

function ButtonOTP() {
  return (
    <>
      <div className={buttonotpstyle.maindiv}>
        <button className={buttonotpstyle.button}>Verify</button>
      </div>
    </>
  );
}

export default ButtonOTP;
