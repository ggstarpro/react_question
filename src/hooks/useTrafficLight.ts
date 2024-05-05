import { useEffect, useState } from 'react';

const LIGHT_CYCLE_MAPPING = {
  red: 'green',
  green: 'yellow',
  yellow: 'red',
} as const;

type Light = keyof typeof LIGHT_CYCLE_MAPPING;
type UseTrafficLight = () => {
  currentLight: Light;
};

export const useTrafficLight: UseTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState<Light>('red');
  useEffect(() => {
    const timerId = setTimeout(() => {
      const nextLight = LIGHT_CYCLE_MAPPING[currentLight];
      setCurrentLight(nextLight);
    }, 1000);

    return () => clearInterval(timerId);
  }, [currentLight]);

  return {
    currentLight,
  };
};
