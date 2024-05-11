# 要件
- 画像のものを作成してください
- 年齢のtypeはtextにしてください
- 年齢の初期値は空文字にしてください
- 年齢の型は文字列にしてください
- 初期ユーザーは下記の形にしてください
```
const INITIAL_USERS: User[] = [
  {name: 'Alice', age: 22},
  {name: 'Bob', age: 33},
  {name: 'Charlie', age: 43},
  {name: 'David', age: 55},
]
```
- `filter`と`includes`を使用してください
- `useMemo`を使用してください
- カスタムフック(src/hooks/use.ts)に切り出してください

# 備考
`useMemo`の依存配列はクイック修正でも入力できる