import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <LightBulb />
    </div>
  );
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  return (
    <div>
      <button onClick={toggle}>Switch</button>
    </div>
  );

  function toggle() {
    setBulbOn((currentState) => !currentState);
  }
}

export default App;
