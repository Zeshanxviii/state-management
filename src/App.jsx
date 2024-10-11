import "./App.css";
import Profile from "./components/profile";
import Login from "./components/login";
import Themecontext from "./context/themeContext";

function App() {
  return (
    <Themecontext>
      <Login />
      <Profile />
    </Themecontext>
  );
}

export default App;
