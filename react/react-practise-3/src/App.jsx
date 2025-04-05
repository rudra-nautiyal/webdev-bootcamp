import { useState } from "react";
import "./App.css";
import { useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const timer = useRef();

  function startClock() {
    let value = setInterval(() => {
      setCount((count) => count + 1);
    }, 1000);
    timer.current = value;
  }

  function stopClock() {
    clearInterval(timer.current);
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
        fontSize: "22px",
      }}
    >
      {count}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
      </div>
    </div>
  );
}

export default App;
