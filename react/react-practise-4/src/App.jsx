import { useState, createContext, useContext, Children } from "react";
import "./App.css";

const BulbContext = createContext();

export function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(false);
  return (
    <BulbContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
      {children}
    </BulbContext.Provider>
  );
}

function App() {
  return (
    <div>
      <BulbProvider>
        <LightBulb />
      </BulbProvider>
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
