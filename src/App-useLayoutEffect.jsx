import React, { useEffect, useLayoutEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Message from useEffect.");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect.");
  }, []);

  return (
    <>
      <h1>Test Message...</h1>
    </>
  );
}

export default App;

// test message, useLayoutEffect, useEffect, screen got printed in this order.

//It worked before...now it is not working. Do not know why.
