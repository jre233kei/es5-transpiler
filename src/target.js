const hoge = 100;
let fuga = 100;

const foo = (arr) => arr.map((a) => a*a)

console.log(`result is ${foo([1,2,3])}`)

async function b() {
    await new Promise(resolve => setTimeout(resolve, 3000))
}

b();