import react, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={increaseCount}>Increase</button>
    </>
  );
}

export default App;
