import { useState } from "react";

import "./App.css";
import PhoneInput from "./components/PhoneInput";
import OtpInput from "./components/OtpInput";

function App() {
  const [isPhoneSubmitted, setIsPhoneSubmitted] = useState(false);
  return (
    <>
      {isPhoneSubmitted ? (
        <OtpInput />
      ) : (
        <PhoneInput changePhoneSubState={setIsPhoneSubmitted} /> //you can send you desired length of otp and onsubmit function
      )}
    </>
  );
}

export default App;
