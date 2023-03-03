import React from "react";
import { useState, useEffect } from "react";

export const MyComponent = () => {
  const initVal = { fName: "", lName: "", num: "" };
  const [formVal, setFormVal] = useState(initVal);
  const [isValidated, setIsValidated] = useState(true);
  const [formErr, setFormErr] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
    // console.log(formVal); className="red"
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFormErr(validator(formVal));
    if (validator) {
      setIsValidated(false);
    }
  };

  const validator = (values) => {
    let errors = {};
    if (!values.fName) {
      errors.fName = "First name is required";
    }
    if (!values.lName) {
      errors.lName = "Last name is required";
    }
    if (!values.num) {
      errors.num = "Number is required";
    } else if (values.num.length !== 9) {
      errors.num = "Number must be 9 numbers";
    }
    // console.log(errors);
    return errors;
  };

  //

  return (
    <div>
      <form
        style={{ display: isValidated ? "block" : "none" }}
        onSubmit={submitHandler}
      >
        <div className="formInputs">
          <div className="area">
            <input
              type="text"
              name="fName"
              placeholder="Name"
              value={formVal.fName}
              onChange={changeHandler}
            />
            <p className="red">{formErr.fName}</p>
          </div>
          <div className="area">
            <input
              type="text"
              name="lName"
              placeholder="Last name"
              value={formVal.lName}
              onChange={changeHandler}
            />
            <p className="red">{formErr.lName}</p>
          </div>

          <div className="area">
            <input
              type="number"
              name="num"
              placeholder="Number"
              value={formVal.num}
              onChange={changeHandler}
            />
            <p className="red">{formErr.num}</p>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
