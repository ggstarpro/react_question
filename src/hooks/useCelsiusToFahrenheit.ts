import { useState, ChangeEvent } from 'react';

type UseCelsiusToFahrenheit = () => {
  celsius: number;
  handleChangeCelsius: (e: ChangeEvent<HTMLInputElement>) => void;
  convertCelsiusToFahrenheit: (celsius: number) => number;
};

export const useCelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState(0);
  const handleChangeCelsius = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = Number(e.target.value);
    setCelsius(inputValue);
  };
  const convertCelsiusToFahrenheit = (celsius: number) => {
    return (celsius * 9 + 5) / 32;
  };

  return {
    celsius,
    handleChangeCelsius,
    convertCelsiusToFahrenheit,
  };
};
