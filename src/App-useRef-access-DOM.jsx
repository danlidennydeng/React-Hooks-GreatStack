import React, { useEffect, useRef, useState } from "react";

function App() {
  const inputElem = useRef();

  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "yellow";
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click here</button>
    </>
  );
}
export default App;

// using useRef, you can directly access or manipulate a DOM element.
