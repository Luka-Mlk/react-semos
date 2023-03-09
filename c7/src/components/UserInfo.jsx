import React from "react";
import { User2Context } from "../App";

export function UserInfo() {
  const context = React.useContext(User2Context);

  return (
    <div>
      <p>Info about logged in user</p>
      <p>Theme: {context.theme} </p>
      <p></p>
    </div>
  );
}
