import React, { useState } from "react";
import { NavBackContext } from "./context";

export default function ContextStore(props) {
  const navBackColor = "linear-gradient(to left, var(--primary-color), var(--purple))";
  const [navBack, setNavBack] = useState(navBackColor);

  return (
    <>
      <NavBackContext.Provider value={{ setNavBack, navBack }}>
        {props.children}
      </NavBackContext.Provider>
    </>
  );
}
