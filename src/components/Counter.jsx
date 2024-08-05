import { useState } from "react";

// Hvad er fejlen her og hvordan løses den?

const Counter = () => {
  const [count, setCount] = useState(0);

  //bruge setCount til at opdatere count

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
