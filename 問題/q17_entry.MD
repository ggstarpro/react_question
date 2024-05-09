# 要件
- 画像のものを作成してください
- inputの横幅を合わせるため`w-80`と`w-full`を使用してください
- 日付フィルターは`type="date"`を使用してください
- 日付は`toLocaleDateString()`で表示してください
- 日付のフィルタ関数は`useMemo`を使用してください
- カスタムフック(src/hooks/useEntry.ts)に切り出してください



# 備考
- inputはブロック要素ではない
- `useMemo`は実行結果自体を保存する
- `useCallback`は関数自体を保存する(今回は使用しない)
- `useMemo`はstateの領域(関数コンポーネント内)に配列処理をするときはuseMemoを使用することが多い
