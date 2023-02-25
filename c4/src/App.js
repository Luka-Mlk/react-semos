import "./App.css";
import { Counter } from "./components/Counter";
import { Dates } from "./components/Dates";
import { StateTutorial } from "./components/StateTutorial";
import { useState, useEffect } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Inside useEffect");
  }, [username]);

  return (
    <div className="App">
      <h2>Hello world</h2>
      {/* <StateTutorial />
      <Dates />
      <Counter /> */}
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <p>Username: {username}</p>
      <p>Password: {password} </p>
    </div>
  );
}

export default App;
