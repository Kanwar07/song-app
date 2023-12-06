import React from "react";
import buttonsigninstyle from "./Button.module.css";

function ButtonSignIn() {
  return (
    <>
      <div className={buttonsigninstyle.maindiv}>
        <button className={buttonsigninstyle.button}>Sign In</button>
      </div>
    </>
  );
}

export default ButtonSignIn;
