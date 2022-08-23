import { func } from 'prop-types';
import React, { useEffect, useState, useRef } from 'react';
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

  // const callback = function () {
  //   console.log(count);
  //   setCount(count + 1);
  // };
  // const ref = useRef(callback);
  // ref.current = callback;
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     ref.current();
  //   }, 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  return (
    <div>
      <p>每隔1s +1</p>
      count: {count}
      <button onClick={pause}>{isPause ? '开启' : '暂停'}</button>
    </div>
  );
}
