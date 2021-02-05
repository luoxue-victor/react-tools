import React, { useReducer } from 'react';

let count = 0;

export default function Counter() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => forceUpdate(count++)}>setCount +</button>
    </>
  );
}

