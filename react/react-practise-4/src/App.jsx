import { useState, createContext, useContext } from "react";
import "./App.css";

const BulbContext = createContext();

function App() {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <div>
      <BulbContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
        <LightBulb />
      </BulbContext.Provider>
    </div>
  );
}

function LightBulb() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
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
