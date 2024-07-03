import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const newFn = () => {};

  return (
    <>
      <Header newFn={newFn} />
      <h1> {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>
        click to count
      </button>
    </>
  );
}
export default App;

// The Header component with the newFn as a props got re-rendered every time when we click the counter, even though we have .memo in Header.js. This still creates a new instance of Header component.
