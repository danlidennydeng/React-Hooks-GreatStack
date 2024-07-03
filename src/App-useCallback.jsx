import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <h1> {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        click to count
      </button>
    </>
  );
}
export default App;

// The Header component got re-rendered every time when we click the counter.
