import React, { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );

  useEffect(() => {
    localStorage.setItem("username", name);
  }, [name]);

  return (
    <>
      <input
        type="text"
        placeholder="enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello...{name}</h1>
    </>
  );
}

export default App;
