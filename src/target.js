// 正しく動作させるため必要なライブラリ・削除厳禁！！
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// ここまで削除厳禁

// ↓ここから変更したいプログラムを書き込んでください

const hoge = 100;
let fuga = 100;

async function b() {
    await new Promise(resolve => setTimeout(resolve, 3000))
}

b();

const foo = (arr) => arr.map((a) => a*a)

console.log(`result is ${foo([1,2,3])}`)
