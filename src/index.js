import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Splash from "./components/splash";

function Load() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2250);
  }, []);

  if (loader) {
    return <Splash />;
  } else {
    return <App />;
  }
}

export default Load;

ReactDOM.render(<Load />, document.getElementById("root"));
