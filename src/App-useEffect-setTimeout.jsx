import react, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Denny");

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);
  }, [name]);
  // dependency of [] would make sure the useEffect only run one time instead of running forever.
  // dependency of [count] or no dependency would make the useEffect runs forever again since the [count] is changing...
  // if dependency of [name] is changed, it would render again. It only render one time since name is not changed.

  return (
    <>
      <h1>I have rendered {count} times!</h1>
    </>
  );
}

export default App;
