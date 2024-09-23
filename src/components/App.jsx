import React, { useState } from "react";

function App() {
  setInterval(timeSetting, 1000);
  const [time, setTime] = useState(0);

  function timeSetting() {
    let currentTime = new Date().toLocaleTimeString();
    setTime(currentTime);
  }
  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={timeSetting}>Get Time</button>
    </div>
  );
}

export default App;
