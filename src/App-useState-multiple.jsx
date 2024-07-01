import react, { useState } from "react";

function App() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };

  return (
    <>
      <h1>My {car.brand}</h1>
      <h1>
        It is a {car.color} {car.model} from {car.year}
      </h1>

      <button onClick={changeColor}>change to Blue</button>
    </>
  );
}

export default App;
