import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

import Button from '@/components/common/parts/Button';
import { savingsState } from '@/hooks/atom/savingState';

const SavingsForm = (): JSX.Element => {
  const [savings, setSavings] = useRecoilState(savingsState);
  const [amount, setAmount] = useState('');

  const handleChangeAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleSubmit = () => {
    setSavings(savings + Number(amount));
    setAmount('');
  };

  return (
    <>
      <input
        className="rounded-md border px-3 py-2 outline-none"
        type="number"
        value={amount}
        onChange={handleChangeAmount}
      />
      <div className="mt-4 flex justify-center">
        <Button label="貯金を追加" onClick={handleSubmit} variant="primary" />
      </div>
    </>
  );
};

export default SavingsForm;
