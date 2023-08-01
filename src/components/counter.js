import { useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleClickIncrement = () => setCounter(counter + 10);
  const handleClickDecrement = () => setCounter(counter - 10);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <p>counter: {counter}</p>
      <div>
        <button onClick={handleClickIncrement}>Increment</button>
        <button onClick={handleClickDecrement}>Decrement</button>
      </div>
    </div>
  );
}
