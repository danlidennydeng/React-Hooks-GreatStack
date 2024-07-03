import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "415-815-8976";
  const name = "GreatStack";
  // Not only passing props as a global variable, you can also pass array like this phone and name array, object and function as well

  return (
    <AppContext.Provider value={[phone, name]}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
