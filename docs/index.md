## セットアップ方法

以下のリンクをブックマークレットとしてブックマークタブに追加してください。

[akizuki-bookmarklet](javascript:(function(d,s){s=d.createElement('script');s.src='https://cdn.rawgit.com/Tiryoh/akizuki-bookmarklet/master/akizuki-bookmarklet-get-name-code-price.min.js';d.getElementsByTagName('head')[0].appendChild(s);})(document);)

![](./images/add_bookmarklet.gif)

中身：

```
javascript:(function(d,s){s=d.createElement('script');s.src='https://cdn.rawgit.com/Tiryoh/akizuki-bookmarklet/master/akizuki-bookmarklet-get-name-code-price.min.js';d.getElementsByTagName('head')[0].appendChild(s);})(document);
```

## 使い方

秋月電子通商で商品情報を取得したい商品ページを開き、ブックマークレットを実行してください。

<iframe width="560" height="315" src="https://www.youtube.com/embed/diknfqoc0zI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

[ポップアップがブロック](https://support.google.com/chrome/answer/9547)されることがあります。そのときは許可してください。

![](./images/popup_block.png)


## 動作確認環境

* Google Chrome
  * Windows
    * 68.0.3440.106（Official Build） （64 ビット）


## 関連するかもしれないサービス

秋月で買える電子部品でリスト作成して色々できるサービスを作った : Eleclog.
[http://eleclog.quitsq.com/2016/06/akicart.html](http://eleclog.quitsq.com/2016/06/akicart.html)