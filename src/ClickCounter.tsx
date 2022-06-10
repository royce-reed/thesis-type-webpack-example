import { useState } from "react";

export const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <p>You clicked {count} times</p> */}
      <button onClick={() => setCount(c=> c + 1)}>Count {count}</button>
    </div>
  );
}