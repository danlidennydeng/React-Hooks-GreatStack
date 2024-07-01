import react, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increaseCount}>Increase by 4</button>
    </>
  );
}

export default App;
