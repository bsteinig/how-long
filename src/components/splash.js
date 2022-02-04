import React, { useState } from "react";

function Splash() {
  const [entrance, setEntrance] = useState("entrance");
  const title = () => {
    setEntrance(entrance ? "" : "entrance");
  };

  onanimationend = () => {
    setEntrance(entrance ? "" : "entrance");
  };

  return (
    <div className="main mirage" onClick={() => title()}>
      <h1 className={`title ${entrance}`}>Solstice</h1>
    </div>
  );
}

export default Splash;
