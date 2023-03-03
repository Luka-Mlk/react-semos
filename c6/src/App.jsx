import "./App.css";
import { FormExample } from "./components/FormExample";
import { MyComponent } from "./components/MyComponent";
import { useState } from "react";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="App">
      <div>
        {/* <FormExample /> */}
        {/* <MyComponent /> */}
        <Login />
      </div>
    </div>
  );
}

export default App;
