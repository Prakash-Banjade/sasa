import React, { useState } from "react";
import { NavBackContext } from "./context";

export default function ContextStore(props) {
  const navBackColor = "#283943";
  const [navBack, setNavBack] = useState(navBackColor);

  return (
    <>
      <NavBackContext.Provider value={{ setNavBack, navBack, navBackColor }}>
        {props.children}
      </NavBackContext.Provider>
    </>
  );
}
