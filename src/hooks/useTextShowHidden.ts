import { useState } from 'react';

type TextShowHidden = () => {
  isHidden: boolean;
  handleClickIndicate: () => void;
  handleClickHidden: () => void;
};

export const useTextShowHidden: TextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClickIndicate = () => {
    setIsHidden(false);
  };
  const handleClickHidden = () => {
    setIsHidden(true);
  };

  return {
    isHidden,
    handleClickIndicate,
    handleClickHidden,
  };
};
