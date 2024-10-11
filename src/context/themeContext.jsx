import { useState } from "react";
import ContextProvider from "./themStore";

const themecontext = ({ children }) => {
  const [user, setUser] = useState()
  return
  <ContextProvider.Provider value={{user,setUser}}>
    {children}
  </ContextProvider.Provider>
};

export default themecontext;
