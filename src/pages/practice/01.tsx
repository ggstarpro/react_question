import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useCountUp } from '@/hooks/useCount';

const Page: NextPage = () => {
  const { count, onClickCountUp } = useCountUp();
  return (
    <>
      <div className="mx-auto mt-10 max-w-4xl">
        {/* Q1
        <ThreeBoxContent
          title1="これはタイトルです"
          content1="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
          title2="これはタイトルです"
          content2="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
          title3="これはタイトルです"
          content3="これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。これはコンテンツです。"
        /> */}

        <div className="flex justify-center">
          <div>
            <h3 className="mb-4 text-center text-6xl">{count}</h3>
            <Button variant="primary" label="カウントアップ" onClick={onClickCountUp} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
