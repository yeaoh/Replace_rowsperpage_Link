# Replace rowsperpage Link
Salesforceの増やすリンクの件数を書き換えるChrome拡張


## Description
* ApexページやVisualforceページ画面の下部にある「▼増やす」リンクをクリックしたときの表示件数を書き換えます
* 何回クリックしても表示件数が増えないイライラから解消されます
* 書き換える表示件数はオプションで指定可能です
* 「▼」は画像で、classに「moreArrow」が設定されているので、これをもとに書き換え先のリンクを取得しています
* ページ内に「moreArrow」があれば、表示件数を書き換えます（すべてのページはチェックできていません）


## Install
1. リポジトリ内の全てのフォルダ、ファイルをダウンロードする
 * 「Clone or download」から「Download ZIP」を押下し解凍する
2. Chromeの拡張機能の画面を開く
 1. chrome://extensions/
 2. 設定＞その他のツール＞拡張機能
3. 「デベロッパーモード」のチェックボックスをONにする
4. 「パッケージ化されていない拡張機能を読みこむ」ボタンを押下し、1.でダウンロードしたフォルダを指定する
 * manifest.jsonがあるフォルダです


## Licence
[MIT](https://github.com/yeaoh/Replace_rowsperpage_Link/blob/master/LICENSE)


## Author
[yeaoh](https://github.com/yeaoh)
