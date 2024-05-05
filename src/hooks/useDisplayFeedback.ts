import { useState, ChangeEvent } from 'react';

type UseDisplayFeedback = () => {
  feedBackText: string;
  feedBackList: string[];
  handleChangeFeedBackText: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSendFeedBack: () => void;
};

export const useDisplayFeedback: UseDisplayFeedback = () => {
  const [feedBackText, setFeedBackText] = useState('');
  const [feedBackList, setFeedBackList] = useState<string[]>([]);
  const handleChangeFeedBackText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFeedBackText(e.target.value);
  };
  const handleSendFeedBack = () => {
    if (!feedBackText.trim()) {
      return;
    }
    setFeedBackList((prevState: string[]) => [...prevState, feedBackText]);
    setFeedBackText('');
  };

  return {
    feedBackText,
    feedBackList,
    handleChangeFeedBackText,
    handleSendFeedBack,
  };
};
