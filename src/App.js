import React, { useState, useEffect } from "react";
import "suncalc";
import "animate.css";
import "./styles/animations.css";
import "./styles/app.css";
import "./styles/gradients.css";

function App() {
  const [position, setPosition] = useState();

  useEffect(() => {
    if (navigator.geolocation) {
      (async () => {
        const getPos = async () => {
          const pos = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
          });
          setPosition([pos.coords.latitude, pos.coords.longitude]);
          return true;
        };
        const locStatus = await getPos();
        console.log(locStatus);
      })();
    } else {
      alert("Geolocation is not supported by this browser. :(");
    }
  }, []);

  useEffect(() => {
    if (position) console.log("position set", position);
  }, [position]);

  return (
    <div className="main mirage">
      <h1 className="show-title">Solstice Home</h1>
    </div>
  );
}

export default App;
