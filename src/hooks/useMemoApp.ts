import { useState, ChangeEvent } from 'react';

type UseMemoApp = () => {
  memo: string;
  memoList: string[];
  handleChangeMemo: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddMemo: () => void;
  handleDeleteMemo: (index: number) => void;
};

export const useMemoApp: UseMemoApp = () => {
  const [memo, setMemo] = useState('');
  const [memoList, setMemoList] = useState<string[]>([]);
  const handleChangeMemo = (e: ChangeEvent<HTMLInputElement>) => {
    setMemo(e.target.value);
  };
  const handleAddMemo = () => {
    if (!memo) {
      return;
    }
    setMemo('');
    setMemoList((prevState) => [...prevState, memo]);
  };
  const handleDeleteMemo = (index: number) => {
    setMemoList((prevState) => prevState.filter((_, i) => index !== i));
  };

  return {
    memo,
    memoList,
    handleChangeMemo,
    handleAddMemo,
    handleDeleteMemo,
  };
};
