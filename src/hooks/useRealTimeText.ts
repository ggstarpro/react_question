import { useState, ChangeEvent } from 'react';
type RealTimeText = () => {
  text: string;
  handleChangeText: (event: ChangeEvent<HTMLInputElement>) => void;
};
export const useRealTimeText: RealTimeText = () => {
  const [text, setText] = useState('');
  const handleChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return {
    text,
    handleChangeText,
  };
};
