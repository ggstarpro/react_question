import { useRecoilValue } from 'recoil';

import { goalState, savingsState } from '@/hooks/atom/savingState';

const SavingsProgress = (): JSX.Element => {
  const savings = useRecoilValue(savingsState);
  const goal = useRecoilValue(goalState);

  const progress = Math.min((savings / goal) * 100, 100);

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        <progress value={progress} max="100" />
      </div>
      <p className="mt-4 text-center text-base">
        {progress.toFixed(2)}% ({savings} / {goal})
      </p>
    </div>
  );
};

export default SavingsProgress;
