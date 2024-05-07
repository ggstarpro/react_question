# 要件
- 画像のものを作成してください
- エンドポイントは「https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}」を使用してください
- 検索結果がない場合`text-red-500`でポケモンが見つかりませんと表示されるようにしてください
- 画像にはalt属性"キャラクタ名"をつけてください
- ポケモン情報のstateの初期値は空オブジェクトでなく「null」にしてください(「&&」を使用するときtrueになってしまうため)
- カスタムフック(src/hooks/usePokemon.ts)に切り出してください


## 備考
取得する際の関数は関数コンポーネントに書かないといけない。なぜならstateがらみの関数であるから。
typeとinterfaceについて、interfaceで名前がかぶると拡張される。

* 参考
- Charizard
- Gyarados