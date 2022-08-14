import React, { useState } from 'react';
import useCountdown from '..';
export default function () {
  const [targetDate] = useState<number>(new Date().getTime() + 5 * 1000);
  // 返回毫秒
  const [countdown] = useCountdown({
    targetDate,
    onEnd: () => {
      alert('end');
    },
  });

  return (
    <div className="demo-container">
      <p>倒计时5s</p>
      {countdown}
    </div>
  );
}
