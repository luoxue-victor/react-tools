import React, { useReducer } from 'react';
import store from '../store/redux-test';

export default function Hooks() {
  return <Example />
}

function Example() {
  const [, forceUpdate] = useReducer(x => x + 1, 0);

  // 可以手动订阅更新，也可以事件绑定到视图层。
  store.subscribe(() => forceUpdate())
  
  return (
    <div>
      <p>You clicked {store.getState()} times</p>
      <button onClick={() => store.dispatch({ type: 'INCREMENT' })}>
        Click me
      </button>
    </div>
  );
}