import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import themecontext from "./context/themeContext";

function App() {
  const [count, setCount] = useState(0);
  const handletheme = () => {};
  return (
    <themecontext>
      <div className="bg-black h-screen">
        <button onClick={handletheme}>theme</button>
        <h1 className="text-white">hello world</h1>
      </div>
    </themecontext>
  );
}

export default App;
