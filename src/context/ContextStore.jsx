import React, { useState } from "react";
import { NavBackContext } from "./context";
import { ThemeContext } from "./context";

export default function ContextStore(props) {
  // all about theme
  const [dark, setDark] = useState(true)
  const handleTheme = ()=>{
    setDark(prev => !prev)
  }


  // Initial Navbar background on different services page 
  const navBackColor = "#283943";
  const [navBack, setNavBack] = useState(navBackColor);




  return (
    <>
    <ThemeContext.Provider value={{dark, handleTheme}}>
      <NavBackContext.Provider value={{ setNavBack, navBack, navBackColor }}>
        {props.children}
      </NavBackContext.Provider>
    </ThemeContext.Provider>
    </>
  );
}
