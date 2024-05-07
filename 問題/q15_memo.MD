# 要件
- 画像のものを作成してください
- 配列の要素はulとliを使用してください
- 配列の要素にはborder-gray-200を使用してください
- 配列はaddを使用しない方法で追加してください
- 削除するときのvariantはerror-secondaryにしてください
- カスタムフック(src/hooks/useMemoApp.ts)に切り出してください




# 備考
- !!変数　でboolの値としてみなせる
- `(prevState) => prevState.filter((_,i) => i !== index)`のように「_」は要素自体は要らずiだけ欲しいのでという意味になる
(「引数として設定するけど関数内では使われないよ」