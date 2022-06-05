import React from "react";
import Router from "./router";
import { useRecoilState } from "recoil";
import { darkTheme } from "./store";

function App(props) {
  const [currentTheme, setCurrentTheme] = useRecoilState(darkTheme);
  const theme =
    currentTheme == true ? "bg-dark text-white" : "bg-white text-dark";

  return (
    <div className={`vh-100 ${theme}`}>
      <Router />
    </div>
  );
}

export default App;
