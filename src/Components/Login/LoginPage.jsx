import React, { useContext } from "react";
import { Stack } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import loginpagestyle from "./LoginPage.module.css";
import "react-phone-input-2/lib/style.css";
import ButtonSignIn from "../Button/ButtonSignIn";
import { Alldata } from "../Context/Context";
import { Link } from "react-router-dom";

function LoginPage() {
  const { number, setnumber } = useContext(Alldata);
  const handlechange = (value) => {
    setnumber(value);
  };

  return (
    <>
      <Stack direction="column" spacing={2} className={loginpagestyle.main}>
        <div className={loginpagestyle.heading}>Sign In</div>
        <div className={loginpagestyle.para}>
          Please enter your mobile number to login. We will send an OTP to
          verify your number
        </div>
        <PhoneInput
          className={loginpagestyle.phone}
          placeholder="Phone Number"
          country={"in"}
          value={number}
          onChange={handlechange}
        />
        <Link to="/verify">
          <ButtonSignIn />
        </Link>
      </Stack>
    </>
  );
}

export default LoginPage;
