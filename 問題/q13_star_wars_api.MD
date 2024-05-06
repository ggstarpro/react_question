# 要件
- 画像のものを作成してください
- エンドポイントは「https://swapi.dev/api/people/${id}/」を使用してください
- 実行するたびに${id}は+1してください
- fetchを使用してください
- thenではなく「async await」を使用してください
- キャラクタデータが取得できなければ「Loading...」と表示するようにしてください
- カスタムフック(src/hooks/useStarWars.ts)に切り出してください

- promiseについて解説できるようにしてください
- async awaitについて解説できるようにしてください
- fetchについて解説できるようにしてください


## 備考
* 文字メモ
```
名前:
身長:
体重:
髪の色:
肌の色:
目の色:
生年:
性別:
```

* api response sample
```
{
	"name": "Luke Skywalker",
	"height": "172",
	"mass": "77",
	"hair_color": "blond",
	"skin_color": "fair",
	"eye_color": "blue",
	"birth_year": "19BBY",
	"gender": "male",
	"homeworld": "https://swapi.dev/api/planets/1/",
	"films": [
		"https://swapi.dev/api/films/1/",
		"https://swapi.dev/api/films/2/",
		"https://swapi.dev/api/films/3/",
		"https://swapi.dev/api/films/6/"
	],
	"species": [],
	"vehicles": [
		"https://swapi.dev/api/vehicles/14/",
		"https://swapi.dev/api/vehicles/30/"
	],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
```

# 非同期参考
https://qiita.com/nakajima417/items/937509491a7033243e86