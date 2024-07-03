import React, { useState, useCallback } from "react";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  const newFn = useCallback(() => {}, []);

  // const newFn = useCallback((count) => {}, [count]);
  // The dependency of count would cause re-rendering of Header again

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

// Now the newFn is cached. Click on count will not cause the re-rendering of Header since newFn is cached as the same function.
