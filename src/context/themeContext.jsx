import { useState } from "react";
import ContextProvider from "./themStore";

const Themecontext = ({ children }) => {
  const [user, setUser] = useState(null)
  return(
  <ContextProvider.Provider value={{user,setUser}}>
    {children}
  </ContextProvider.Provider>
  )
};

export default Themecontext;
