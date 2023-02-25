import { useState } from "react";
import "./App.css";
import { Food } from "./components/Food";
import { StudentTable } from "./components/StudentTable";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Food path="/img/ramen.jpg" name="ramen" />
      <Food path="/img/ribeye.jpg" name="Ribeye" />
      <Food path="/img/shrimp.jpeg" name="Shrimp" />
      <Food path="/img/vegan-salad.jpg" name="Vegan Salad" />
      <StudentTable />
    </div>
  );
}

export default App;
