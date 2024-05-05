import { useState } from 'react';

export const COLORS = ['lightpink', 'lightgreen', 'lightblue', 'lavender', 'wheat'];

type UseChangeBgColor = () => {
  bgColorIndex: number;
  handleChangeBgColor: () => void;
};

export const useChangeBgColor: UseChangeBgColor = () => {
  const [bgColorIndex, setBgColor] = useState(0);
  const handleChangeBgColor = () => {
    setBgColor((prevState: number) => (prevState + 1) % COLORS.length);
  };
  return {
    bgColorIndex,
    handleChangeBgColor,
  };
};
