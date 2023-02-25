import React from "react";
import { useState } from "react";

export function StudentTable() {
  let btnValue = "Show results";

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [pass, setPass] = useState("");
  const [mail, setMail] = useState("");
  const [age, setAge] = useState(0);

  return (
    <>
      <div>
        <form>
          <input type="text" value={fName} placeholder="Name" />
          <br />
          <input type="text" value={lName} placeholder="Last name" />
          <br />
          <input type="text" value={mail} placeholder="Mail" />
          <br />
          <input type="password" value={pass} placeholder="Password" />
          <br />
          <input type="number" value={age} placeholder="Age" />
          <br />
          <br />
          <button>{btnValue}</button>
        </form>
        <h4> {} </h4>
        <h4> {} </h4>
        <h4> {} </h4>
        <h4> {} </h4>
        <h4> {} </h4>
      </div>
    </>
  );
}
