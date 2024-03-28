import { NextPage } from 'next';

import SavingsForm from '@/components/SavingsForm';
import SavingsProgress from '@/components/SavingsProgress';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 flex max-w-4xl justify-center">
      <div>
        <SavingsForm />
        <SavingsProgress />
      </div>
    </div>
  );
};

export default Page;
