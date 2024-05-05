import { useEffect, useState } from 'react';

type UserTimer = () => {
  timer: number;
  handleCountToggle: () => void;
  handleRest: () => void;
  handleDisplayCountLabel: () => string;
};

export const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [isCountActive, setIsCountActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined = undefined;
    if (isCountActive) {
      interval = setInterval(() => {
        setTimer((prevState) => prevState + 1);
      }, 1000);
      // console.log("start >", interval)
    }
    if (!isCountActive && timer !== 0) {
      // console.log("clear >", interval)
      clearInterval(interval);
    }

    return () => {
      // console.log('クリーンアップ関数>', interval)
      clearInterval(interval);
    };
  }, [isCountActive]);

  const handleCountToggle = () => {
    setIsCountActive((prevState) => !prevState);
  };
  const handleRest = () => {
    setTimer(0);
    setIsCountActive(false);
  };
  const handleDisplayCountLabel = () => {
    if (!isCountActive) {
      return '開始';
    }
    return '停止';
  };

  return {
    timer,
    handleCountToggle,
    handleRest,
    handleDisplayCountLabel,
  };
};
