import { NextPage } from 'next';

import { useCelsiusToFahrenheit } from '@/hooks/useCelsiusToFahrenheit';
import { useChangeBgColor } from '@/hooks/useChangeBgColor';
import { useCountUp } from '@/hooks/useCount';
import { useDigitalClock } from '@/hooks/useDigitalClock';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';
import { useQuiz } from '@/hooks/useQuiz';
import { useRealTimeText } from '@/hooks/useRealTimeText';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';

const Page: NextPage = () => {
  /** Q2 */
  const { count, onClickCountUp } = useCountUp();
  /** Q3 */
  const { isHidden, handleClickIndicate, handleClickHidden } = useTextShowHidden();
  /** Q4 */
  const { text, handleChangeText } = useRealTimeText();
  /** Q5 */
  const { bgColorIndex, handleChangeBgColor } = useChangeBgColor();
  /** Q6 */
  const { feedBackText, feedBackList, handleChangeFeedBackText, handleSendFeedBack } =
    useDisplayFeedback();
  /** Q7 */
  const { celsius, handleChangeCelsius, convertCelsiusToFahrenheit } = useCelsiusToFahrenheit();
  /** Q8 */
  const { answerResult, userChoice, handleUserChoice, handleSubmitUserChoice } = useQuiz();
  /** Q9 */
  const { currentTime } = useDigitalClock();
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

        {/* Q3
        <div className="flex justify-center">
          <div>
            {!isHidden && <h2 className="mb-4 text-6xl">こんにちわ</h2>}
            <div className="flex justify-center gap-x-3">
              <Button variant="primary" label="表示" onClick={handleClickIndicate} />
              <Button variant="primary" label="非表示" onClick={handleClickHidden} />
            </div>
          </div>
        </div> */}

        {/* Q4
        <div className="flex justify-center">
          <div>
            <h2 className="mb-4 text-center text-6xl">{text}</h2>
            <div className="flex justify-center">
              <input type="text" className="border px-3 py-2" onChange={handleChangeText} />
            </div>
          </div>
        </div> */}

        {/* Q5
        <div className="h-screen pt-8" style={{ backgroundColor: COLORS[bgColorIndex] }}>
          <div className="flex justify-center">
            <Button variant="primary" label="色を変更" onClick={handleChangeBgColor} />
          </div>
        </div> */}

        {/* Q6
        <div className="flex justify-center">
          <div>
            <textarea
              className="rounded-sm border px-3 py-2"
              onChange={handleChangeFeedBackText}
              placeholder="フィードバックを入力してください"
              value={feedBackText}
            ></textarea>
            <div className="mt-4 flex justify-center">
              <Button variant="primary" label="送信する" onClick={handleSendFeedBack} />
            </div>
            <div className="mt-2">
              {feedBackList.map((feedBack, index) => (
                <li key={index}>{feedBack}</li>
              ))}
            </div>
          </div>
        </div> */}
        {/* Q7
        <div className="flex justify-center">
          <div>
            <div className="mb-2 flex items-center gap-x-2">
              <label htmlFor="celsius">摂氏温度</label>
              <input
                type="number"
                id="celsius"
                className="rounded-md border px-2 py-1 outline-none"
                onChange={handleChangeCelsius}
                value={celsius}
              />
            </div>
            <p>華氏温度: {convertCelsiusToFahrenheit(celsius)}</p>
          </div>
        </div> */}
        {/* Q8
        <div className="flex justify-center">
          <div>
            <h3 className="text-center text-2xl">{QUESTION}</h3>
            <div className="mt-4 flex justify-center gap-x-2">
              {CHOICE_LIST.map((choice, index) => (
                <Button
                  onClick={() => handleUserChoice(choice)}
                  label={choice}
                  variant="secondary"
                  className={`${choice === userChoice && 'bg-black'}`}
                  key={index}
                />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button onClick={handleSubmitUserChoice} label="送信" variant="primary" />
            </div>
            <p className="text-center">{answerResult}</p>
          </div>
        </div> */}

        <div className="flex justify-center">
          <div>
            <h3 className="text-center text-2xl">{currentTime.toLocaleString()}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
