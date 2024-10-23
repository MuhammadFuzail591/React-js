import Header from "./components/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";


const App = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("isDarkTheme")));

  return (
    <>
      <Header theme = {[isDark, setIsDark]} />
      <Outlet context={[isDark, setIsDark]} />
    </>
  );
};

export default App;
