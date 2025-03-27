import { useState, useEffect, useDebugValue } from "react";

// conditional rendering
function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((count) => count + 1);
  }
  return (
    <div>
      <Counter count={count}></Counter>
      <button onClick={increase}>Increase count</button>
    </div>
  );
}

function Counter(props) {
  useEffect(function () {
    console.log(`render`);

    return function () {
      console.log(`unmount`);
    };
  }, []);

  useEffect(
    function () {
      console.log(`count has changed`);
    },
    [props.count]
  );

  return <div>Counter {props.count}</div>;
}

export default App;
