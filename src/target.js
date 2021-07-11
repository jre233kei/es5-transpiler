// 正しく動作させるため必要なライブラリ・削除厳禁！！
import 'core-js';
import 'regenerator-runtime/runtime';
// ここまで削除厳禁

// ↓ここから変更したいプログラムを書き込んでください。

// example program

// const/let
const hoge = 100;
let fuga = 100;

// async/await
async function b() {
    console.log("await start")
    await new Promise(resolve => setTimeout(resolve, 3000))
    console.log("await finish")
}

b();

// arrow function
const foo = (arr) => arr.map((a) => a*a)

// template literal
console.log(`map result is ${foo([1,2,3])}`)