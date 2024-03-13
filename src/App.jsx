import React, { useEffect } from "react";
import ReactDOM from "react-dom";


import "./index.scss";
import {useStore} from "./store";

const App = () => {
  const { setNavItems, navItems, increment } = useStore();

  return (
    <>
      Store Connected...

      <button onClick={increment}>Add Count</button>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
