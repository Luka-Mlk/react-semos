import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  const apps = ["Facebook", "Instagram", "Twitter"];
  const [selectedVal, setSelectedVal] = useState("Facebook");
  const [showPass, setShowPass] = useState(false);
  const [textbox, setTextbox] = useState(false);

  const initCredentials = {
    username: "",
    password: "",
    comment: "",
    app: "",
  };

  const [credentials, setCredentials] = useState(initCredentials);
  // useEffect(() => {
  //   console.log(selectedVal);
  // }, [selectedVal]);

  const handleUserCred = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    // console.log(credentials);
  };

  const changeField = (e) => {
    console.log(e.target.id);
    const { id } = e.target;
    if (id === "pass" && showPass === false) {
      setShowPass(true);
      console.log(showPass);
    } else {
      setShowPass(false);
    }
    if (id === "comment" && textbox === false) {
      setTextbox(true);
      console.log(textbox);
    } else {
      setTextbox(false);
    }
  };

  return (
    <div id="login">
      <form className="form-">
        <div className="input--holder--">
          <input
            name="username"
            type="text"
            placeholder="user1"
            onChange={handleUserCred}
          />
        </div>
        <div className="input--holder--">
          <input
            name="password"
            type={showPass === false ? "password" : "text"}
            placeholder="password"
            onChange={handleUserCred}
          />
          <i
            className="fa-regular fa-eye"
            style={{ color: showPass ? "#fefe" : "#000" }}
            id="pass"
            onClick={changeField}
          ></i>
        </div>
        <div className="input--holder--">
          <textarea
            style={{ display: textbox ? "block" : "none" }}
            name=""
            id=""
            cols="22"
            rows="10"
            placeholder="comment"
          ></textarea>
          <input
            name="comment"
            style={{ display: textbox ? "none" : "block" }}
            // type={textbox ? "textarea" : "text"}
            placeholder="comment"
            onChange={handleUserCred}
          />
          <i
            className="fa-regular fa-comments"
            style={{ color: textbox ? "#fefe" : "#000" }}
            id="comment"
            onClick={changeField}
          ></i>
        </div>
        <label>Choose an app</label>
        <Dropdown
          options={apps}
          onChange={(e) => {
            setSelectedVal(e.target.value);
          }}
        />
        <button className="action--button">Sign in</button>
      </form>
    </div>
  );
};
