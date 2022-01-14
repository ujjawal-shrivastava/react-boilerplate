import React, { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span data-testid="counter" style={{margin:"1rem 0.5rem"}}>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
