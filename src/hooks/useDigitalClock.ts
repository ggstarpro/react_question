import { useEffect, useState } from 'react';

type UseDigitalClock = () => {
  currentTime: Date;
};
export const useDigitalClock: UseDigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    console.log('use Effect 初回実施');
    const timerId = setInterval(() => {
      console.log('use Effect 1秒ごとに1回実施');
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  /** ↓↓↓ 不具合確認用 ↓↓↓ */
  // const [currentTime2, setCurrentTime2] = useState(new Date())
  // const timerId2 = setInterval(() => {
  //   console.log("No Use Effect")
  //   setCurrentTime2(new Date())
  // }, 1000)
  /** ↑↑↑ 不具合確認用 ↑↑↑ */

  return {
    currentTime,
  };
};
