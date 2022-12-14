import React, { useState } from 'react';
import useCountdown from '..';
export default function () {
  const [targetDate] = useState<number>(new Date().getTime() + 500 * 1000);
  // 返回毫秒
  const [countdown, formatCountdown] = useCountdown({
    targetDate,
    onEnd: () => {
      alert('end');
    },
  });
  const { hours, minutes, seconds, milliseconds, days } = formatCountdown;
  return (
    <div className="demo-container">
      <p>倒计时5s</p>
      {countdown}
      <br />
      {days}-{hours}-{minutes}-{seconds}-{milliseconds}
    </div>
  );
}
