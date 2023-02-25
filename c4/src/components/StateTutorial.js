import { useState } from "react";

export const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Nekoe ime");

  let onChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <div>
      <h1>State!</h1>
      <input onChange={onChange} placeholder="enter tour name" />
      <h2 id="show">{inputValue}</h2>
    </div>
  );
};
