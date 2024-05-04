import { useState } from 'react';

export const QUESTION = 'Reactはどのようなものですか？';

// 'as const'を使用して、リテラル型の配列にします。
export const CHOICE_LIST = ['ライブラリ', 'フレームワーク', '言語', 'データベース'] as const;
const CORRECT_ANSWER = 'ライブラリ';

// 'CHOICE_LIST[number]'を使用して、CHOICE_LISTの要素の型を取得します。
type Choice = (typeof CHOICE_LIST)[number];

type UseQuiz = () => {
  answerResult: string;
  userChoice: Choice | '';
  handleUserChoice: (choice: Choice) => void;
  handleSubmitUserChoice: () => void;
};

export const useQuiz: UseQuiz = () => {
  const [answerResult, setAnswerResult] = useState('');
  const [userChoice, setUserChoice] = useState<Choice | ''>('');

  const handleUserChoice = (choice: Choice) => {
    setUserChoice(choice);
  };
  const handleSubmitUserChoice = () => {
    if (userChoice === CORRECT_ANSWER) {
      setAnswerResult('正解');
    } else {
      setAnswerResult('不正解');
    }
  };

  return {
    answerResult,
    userChoice,
    handleUserChoice,
    handleSubmitUserChoice,
  };
};
