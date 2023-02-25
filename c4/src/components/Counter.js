import { useState } from "react";
export const Counter = () => {
  const [counter, setCount] = useState(0);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => setCount(counter + 1)}>Zgolemi</button>
      <button onClick={() => setCount(counter - 2)}>Namali</button>
      <button onClick={() => setCount(0)}>Resetiraj</button>
    </div>
  );
};
