import { useState } from "react";

const PhoneInput = ({ changePhoneSubState }) => {
  const [phone, setPhone] = useState("");

  const onPhoneSubmitHandler = (e) => {
    e.preventDefault();
    const regex = /^[0-9]+/g;

    if (!phone || !regex.test(phone)) {
      alert("Please enter a valid phone number");
      return;
    }
    changePhoneSubState(true);
  };

  const onPhonechangeHandler = (e) => {
    setPhone(e.target.value);
  };
  return (
    <div className="phoneinput">
      <form onSubmit={onPhoneSubmitHandler}>
        <h2>Please enter the phone number</h2>
        <input value={phone} onChange={(e) => onPhonechangeHandler(e)} />
        <button type="submit" onClick={(e) => onPhoneSubmitHandler(e)}>
          proceed
        </button>
      </form>
    </div>
  );
};

export default PhoneInput;
