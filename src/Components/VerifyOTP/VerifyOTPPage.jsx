import React, { useContext } from "react";
import { Stack } from "@mui/material";
import verifyotppagestyle from "./VerifyOTPPage.module.css";
import OtpInput from "react-otp-input";
import ButtonOTP from "../Button/ButtonOTP";
import { Alldata } from "../Context/Context";
import { Link } from "react-router-dom";

function VerifyOTPPage() {
  const { otp, setOtp } = useContext(Alldata);

  const handleotp = (value) => {
    setOtp(value);
  };
  return (
    <>
      <Stack direction="column" spacing={2} className={verifyotppagestyle.main}>
        <div className={verifyotppagestyle.heading}>OTP Verification</div>
        <div className={verifyotppagestyle.para}>
          We have sent and OTP to +919889898989. Please enter the code received
          to verify.
        </div>
        <OtpInput
          className={verifyotppagestyle.otp}
          value={otp}
          onChange={handleotp}
          numInputs={4}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
        />
        <Link to="/songs" style={{ textDecoration: "none" }}>
          <ButtonOTP />
        </Link>

        <button className={verifyotppagestyle.button}>
          <Link to="/verify" style={{ textDecoration: "none" }}>
            Resend OTP
          </Link>
        </button>
        <button className={verifyotppagestyle.button}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Use another number
          </Link>
        </button>
      </Stack>
    </>
  );
}

export default VerifyOTPPage;
