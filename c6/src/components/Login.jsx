import React, { useEffect, useState } from "react";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  const apps = ["Facebook", "Instagram", "Twitter"];
  const [selectedVal, setSelectedVal] = useState("Facebook");

  useEffect(() => {
    console.log(selectedVal);
  }, [selectedVal]);

  return (
    <div id="login">
      <form>
        {
          // first the inputs (homework)
        }
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
