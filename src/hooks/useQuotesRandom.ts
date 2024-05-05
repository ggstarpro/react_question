import { useEffect, useState } from 'react';

const QUOTE_LIST = [
  '人生に失敗がないと、人生に失敗する。',
  '夢見ることができれば、それは実現できる。',
  '行動の起点は、すべて夢にある。',
  '唯一の失敗は、挑戦しなかったことである。',
] as const;
type QUOTE_LIST_TYPE = (typeof QUOTE_LIST)[number];
type UseQuotesRandom = () => {
  quote: QUOTE_LIST_TYPE | '';
};
export const useQuotesRandom: UseQuotesRandom = () => {
  const [quote, setQuote] = useState<QUOTE_LIST_TYPE | ''>('');
  useEffect(() => {
    const randomQuote = QUOTE_LIST[Math.floor(Math.random() * QUOTE_LIST.length)];
    setQuote(randomQuote);
  }, []);

  return {
    quote,
  };
};
