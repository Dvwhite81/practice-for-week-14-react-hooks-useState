import "./UseState.css";
import { useState } from "react";

const UseState = () => {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const opposite = theme === "light" ? "dark" : "light";

  const toggleTheme = () => {
    setTheme(opposite);
  };

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button onClick={toggleTheme}>{opposite}</button>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
