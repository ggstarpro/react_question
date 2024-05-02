import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useCountUp } from '@/hooks/useCount';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';

const Page: NextPage = () => {
  /** Q2 */
  const { count, onClickCountUp } = useCountUp();
  /** Q3 */
  const { isHidden, handleClickIndicate, handleClickHidden } = useTextShowHidden();

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

        {/* Q2
        <div className="flex justify-center">
          <div>
            <h3 className="mb-4 text-center text-6xl">{count}</h3>
            <Button variant="primary" label="カウントアップ" onClick={onClickCountUp} />
          </div>
        </div> */}

        <div className="flex justify-center">
          <div>
            {!isHidden && <h2 className="mb-4 text-6xl">こんにちわ</h2>}
            <div className="flex justify-center gap-x-3">
              <Button variant="primary" label="表示" onClick={handleClickIndicate} />
              <Button variant="primary" label="非表示" onClick={handleClickHidden} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
