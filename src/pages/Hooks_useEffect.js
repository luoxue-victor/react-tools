import React, { useState, useEffect } from 'react';

export default function Hooks () {
  return <Example />
}

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  }, [count]); // 只有 count 改变的时候才会响应

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {
        count % 2 ? <Example2 /> : <Example3 />
      }
    </div>
  );
}

function Example2() {
  useEffect(() => {
    return () => {
      alert('Example2 销毁')
    }
  });

  return (
    <div>
      <p>Example2</p>
    </div>
  );
}

function Example3() {

  useEffect(() => {
    return () => {
      alert('Example3 销毁')
    }
  });

  return (
    <div>
      <p>Example3</p>
    </div>
  );
}
