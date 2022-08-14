import React, { useState } from 'react';
import useInterval from '..';
export default function () {
  const [count, setCount] = useState(0);
  const [isPause, setIsPause] = useState(false);

  useInterval(
    () => {
      setCount(count + 1);
    },
    isPause ? null : 1000,
  );

  const pause = () => {
    setIsPause(!isPause);
  };
  return (
    <div>
      <p>每隔1s +1</p>
      count: {count}
      <button onClick={pause}>{isPause ? '开启' : '暂停'}</button>
    </div>
  );
}
