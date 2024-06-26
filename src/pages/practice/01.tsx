import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { useCelsiusToFahrenheit } from '@/hooks/useCelsiusToFahrenheit';
import { useChangeBgColor } from '@/hooks/useChangeBgColor';
import { useCountUp } from '@/hooks/useCount';
import { useDigitalClock } from '@/hooks/useDigitalClock';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';
import { useEntry } from '@/hooks/useEntry';
import { useMemoApp } from '@/hooks/useMemoApp';
import { usePokemon } from '@/hooks/usePokemon';
import { useQuiz } from '@/hooks/useQuiz';
import { useQuotesRandom } from '@/hooks/useQuotesRandom';
import { useRealTimeText } from '@/hooks/useRealTimeText';
import { useStarWars } from '@/hooks/useStarWars';
import { useTextShowHidden } from '@/hooks/useTextShowHidden';
import { useTimer } from '@/hooks/useTimer';
import { useTodoApp } from '@/hooks/useTodoApp';
import { useTrafficLight } from '@/hooks/useTrafficLight';
import { useUsers } from '@/hooks/useUsers';

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
  /** Q10 */
  const { quote } = useQuotesRandom();
  /** Q11 */
  const { currentLight } = useTrafficLight();
  /** Q12 */
  const { timer, handleCountToggle, handleRest, handleDisplayCountLabel } = useTimer();
  /** Q13 */
  const { starWarsCharacter, setStarWarsId } = useStarWars();
  /** Q14 */
  const { inputPokemon, pokemonApiError, pokemonInfo, handleSetPokemon, fetchPokemon } =
    usePokemon();
  /** Q15 */
  const { memo, memoList, handleChangeMemo, handleAddMemo, handleDeleteMemo } = useMemoApp();
  /** Q16 */
  const {
    todoLabel,
    todoList,
    handleAddTodo,
    handleChangeTodoLabel,
    handleCompleteTodo,
    handleDeleteTodo,
  } = useTodoApp();

  /** Q17 */
  const {
    entryList,
    title,
    content,
    filterDate,
    handleChangeTitle,
    handleChangeContent,
    handleAddEntry,
    handleChangeFilterDate,
    filteredEntryList,
  } = useEntry();

  /** Q18 */
  const {
    userList,
    userName,
    userAge,
    queryUserName,
    handleChangeUserName,
    handleChangeUserAge,
    handleChangeQueryUserName,
    handleAddUser,
    filteredUserList,
  } = useUsers();
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

        {/* Q9
        <div className="flex justify-center">
          <div>
            <h3 className="text-center text-2xl">{currentTime.toLocaleString()}</h3>
          </div>
        </div>
        */}

        {/* Q10
        <div className="flex justify-center">
          <div>
            <h3 className="text-center text-2xl">{quote}</h3>
          </div>
        </div> */}

        {/* Q11
        <div className="flex justify-center">
          <div className="mt-4 flex justify-center gap-x-2">
            <div
              className={`size-12 rounded-full ${currentLight === 'green' ? 'bg-green-600' : 'bg-gray-700'}`}
            ></div>
            <div
              className={`size-12 rounded-full ${currentLight === 'yellow' ? 'bg-yellow-600' : 'bg-gray-700'}`}
            ></div>
            <div
              className={`size-12 rounded-full ${currentLight === 'red' ? 'bg-red-600' : 'bg-gray-700'}`}
            ></div>
          </div>
        </div> */}
        {/* Q12
        <div className="flex justify-center">
          <div>
            <h3 className="text-center text-2xl">時間: {timer}秒</h3>
            <div className="mt-4 flex justify-center gap-x-2">
              <Button
                onClick={handleCountToggle}
                label={handleDisplayCountLabel()}
                variant="primary"
              />
              <Button onClick={handleRest} label="リセット" variant="secondary" />
            </div>
          </div>
        </div> */}
        {/* Q13
        <div className="flex justify-center">
          <div>
            {starWarsCharacter ? (
              <div className="text-center text-base">
                <h2>{starWarsCharacter.name}</h2>
                <p>身長: {starWarsCharacter.height}</p>
                <p>体重: {starWarsCharacter.mass}</p>
                <p>髪の色: {starWarsCharacter.hair_color}</p>
                <p>肌の色: {starWarsCharacter.skin_color}</p>
                <p>目の色: {starWarsCharacter.eye_color}</p>
                <p>成年: {starWarsCharacter.birth_year}</p>
                <p>性別: {starWarsCharacter.gender}</p>
              </div>
            ) : (
              <p className="text-center text-2xl">Loading...</p>
            )}
            <div className="flex justify-center">
              <Button
                label="次のキャラクター"
                variant="primary"
                onClick={() => setStarWarsId((prevState) => prevState + 1)}
              />
            </div>
          </div>
        </div> */}
        {/* Q14
        <div className="flex justify-center">
          <div>
            <div className="mt-4">
              <div>
                <input
                  type="text"
                  className="rounded-md border px-3 py-2 outline-none"
                  placeholder="ポケモンの名前を入力"
                  onChange={handleSetPokemon}
                  value={inputPokemon}
                />
                {pokemonApiError && (
                  <p className="mt-2 text-base text-red-500">{pokemonApiError}</p>
                )}
              </div>

              {pokemonInfo && (
                <div className="mt-4 text-center text-base">
                  <h3>{pokemonInfo.name}</h3>
                  <div className="flex justify-center">
                    <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
                  </div>
                  <div>
                    タイプ:{' '}
                    {pokemonInfo.types.map((pokemonType) => pokemonType.type.name).join(',')}
                  </div>
                  <div>身長: {pokemonInfo.height}</div>
                  <div>重さ: {pokemonInfo.weight}</div>
                </div>
              )}
            </div>
            <div className="mt-4 flex justify-center">
              <Button onClick={fetchPokemon} label="検索" variant="primary" />
            </div>
          </div>
        </div> */}
        {/* Q16
        <div className="flex justify-center">
          <div>
            <div>
              <input
                type="text"
                placeholder="メモを入力"
                className="rounded-md border px-3 py-2 outline-none"
                value={memo}
                onChange={handleChangeMemo}
              />

              <Button label="追加" variant="primary" className="mt-4" onClick={handleAddMemo} />
            </div>

            <ul className="mt-4">
              {memoList.map((memo, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200 py-2 text-sm"
                >
                  {memo}
                  <Button
                    label="削除"
                    variant="error-secondary"
                    onClick={() => handleDeleteMemo(index)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        {/* Q17
        <div className="flex justify-center">
          <div>
            <div>
              <input
                onChange={handleChangeTodoLabel}
                type="text"
                className="rounded-md border px-3 py-2 outline-none"
                placeholder="タスクを入力"
                value={todoLabel}
              />
              <Button onClick={handleAddTodo} label="追加" variant="primary" className="mt-2" />
            </div>
            <ul className="mt-4">
              {todoList.map((todo, todoListIndex) => (
                <li
                  className={`flex items-center justify-between border-b border-gray-500 py-2  ${todo.isCompleted ? 'line-through' : ''}`}
                  key={todoListIndex}
                >
                  {todo.label}
                  <div className="flex gap-x-2">
                    <Button
                      onClick={() => handleCompleteTodo(todoListIndex)}
                      label="完了"
                      variant="secondary"
                    />
                    <Button
                      onClick={() => handleDeleteTodo(todoListIndex)}
                      label="削除"
                      variant="error-secondary"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
        {/* Q18
        <div className="flex justify-center">
          <div className="w-80">
            <div>
              <h2 className="text-2xl font-bold">日記アプリ</h2>
              <div>
                <input
                  type="text"
                  placeholder="タイトル"
                  className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                  onChange={handleChangeTitle}
                  value={title}
                />
                <textarea
                  placeholder="内容"
                  className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                  onChange={handleChangeContent}
                  value={content}
                />
                <Button label="追加" variant="primary" className="mt-4" onClick={handleAddEntry} />
              </div>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-base">日付でフィルター</span>
                <input
                  type="date"
                  className="rounded-md border px-3 py-2 outline-none"
                  onChange={handleChangeFilterDate}
                />
              </div>

              <div className="mt-7">
                <h2 className="text-xl font-bold">日記一覧</h2>
                <ul>
                  {filteredEntryList.map((entry, index) => (
                    <li className="mt-4 rounded-md border p-4" key={index}>
                      <h3>{entry.title}</h3>
                      <p>{entry.content}</p>
                      <p>{entry.createdAt.toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center">
          <div className="w-80">
            <h2 className="text-2xl font-bold">ユーザ検索アプリ</h2>
            <div className="mt-8">
              <h3 className="text-base">ユーザ追加フォーム</h3>
              <input
                type="text"
                placeholder="名前"
                className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                onChange={handleChangeUserName}
                value={userName}
              />
              <input
                type="text"
                placeholder="年齢"
                className="mt-2 w-full rounded-md border px-3 py-2 outline-none"
                onChange={handleChangeUserAge}
                value={userAge}
              />
              <Button
                label="ユーザ追加"
                variant="primary"
                className="mt-4"
                onClick={handleAddUser}
              />
            </div>

            <div className="mt-12">
              <h3 className="text-base">検索フィルター</h3>
              <input
                type="text"
                placeholder="ユーザ検索"
                className="mt-4 w-full rounded-md border px-3 py-2 outline-none"
                onChange={handleChangeQueryUserName}
                value={queryUserName}
              />
            </div>

            <ul className="mt-4">
              {filteredUserList.map((user, index) => (
                <li className="flex justify-between border-b p-4 text-sm" key={index}>
                  <span>{user.name}</span>
                  <span>{user.age}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
