import { useEffect, useRef, useState } from "react";

const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const inputrefs = useRef([]);

  useEffect(() => {
    inputrefs.current[0].focus();
  }, []);

  const onEditOtpHandler = (e, i) => {
    if (isNaN(e.target.value)) {
      alert("Please enter valid otp");
      return;
    }
    const newOTP = [...otp];

    newOTP[i] = e.target.value.substring(e.target.value.length - 1);
    setOtp(newOTP);

    if (e.target.value && inputrefs.current[i + 1]) {
      inputrefs.current[i + 1].focus();
    }

    if (newOTP.join("").trim().length === 4 && i === 3) {
      //submit
      console.log(newOTP);
    }
  };

  const onKeyDownHandler = (e, i) => {
    if (e.key === "Backspace" && i > 0 && inputrefs.current[i - 1] && !otp[i]) {
      inputrefs.current[i - 1].focus();
    }
  };

  const onClickHandler = (e, i) => {
    if (otp[i]) {
      inputrefs.current[i].setSelectionRange(1, 1);
    }
  };

  return (
    <div className="otpinput">
      <h3>Please enter the OTP sent on registered phone no</h3>
      {otp.map((item, index) => {
        return (
          <input
            className="input"
            ref={(ip) => (inputrefs.current[index] = ip)}
            onChange={(e) => onEditOtpHandler(e, index)}
            onKeyDown={(e) => onKeyDownHandler(e, index)}
            onClick={(e) => onClickHandler(e, index)}
            value={otp[index]}
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
