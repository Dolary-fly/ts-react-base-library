import React, { useState, useRef, useEffect } from 'react';

import useLatest from '..';

export default function () {
  const [count, setCount] = useState(10);
  const callback = function () {
    console.log(count);
    setCount(count + 1);
  };
  const fnRef = useLatest(callback);
  return (
    <div>
      <p>每隔1s +1</p>
      count: {count}
      <button
        onClick={() => {
          fnRef.current();
        }}
      >
        点击加1
      </button>
    </div>
  );
}
