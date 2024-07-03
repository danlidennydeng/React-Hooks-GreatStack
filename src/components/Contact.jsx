import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Contact = () => {
  const [phone, name] = useContext(AppContext);

  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone: {phone}</h3>
      <h3>Name: {name}</h3>
    </div>
  );
};

export default Contact;
