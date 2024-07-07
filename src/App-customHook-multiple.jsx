import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [name, setName] = useLocalStorage("username", "");
  const [id, setId] = useLocalStorage("userid", "");

  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello...{name}</h1>

      <input
        type="text"
        placeholder="enter your ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <h1>Your ID is...{id}</h1>
    </>
  );
}

export default App;
