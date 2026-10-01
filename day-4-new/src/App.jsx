import { useMemo, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
  console.log("Calculating...");

  let total = 0;

  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return total;
}, [count]);
 

  return (
    <div>
      <h1>useMemo Practice</h1>

      <p>Count: {count}</p>

      <p>Result: {expensiveCalculation}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;