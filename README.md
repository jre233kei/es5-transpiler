# es5-transpiler
es6以降の文法を使用したファイルをes5に変換します。

# 使い方

`src/target.js`に変換したいES6スクリプトを入力します。
（ファイル先頭に必要なライブラリのimportがあるので消さないでください)


以下のコマンドを実行します。

```
npm i
npm run transpile
```

`dist/target.js`に変換後のファイルが出現します。

# 注意点

`src/target.js`は`node`コマンドで実行できません。
`dist/target.js`を実行して動作を確かめてください。