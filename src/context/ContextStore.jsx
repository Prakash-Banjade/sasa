import React, { useState } from "react";
import { ThemeContext } from "./context";

export default function ContextStore(props) {
  // all about theme
  const [dark, setDark] = useState(true)
  const handleTheme = ()=>{
    setDark(prev => !prev)
  }





  return (
    <>
    <ThemeContext.Provider value={{dark, handleTheme}}>
        {props.children}
    </ThemeContext.Provider>
    </>
  );
}
