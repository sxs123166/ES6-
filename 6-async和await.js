
import thenFs from 'then-fs'
// 1. 什么是async/await
// async和await是ES8引入的新语法，用来简化Promise异步操作，在async/await出现之前，开发者只能通过链式.then()的方法处理promise异步操作
// 示例代码为：
// thenFs.readFile('./files/1.txt', 'utf8') //1.返回值是promise的实例对象
// .then((r1) => { //2.通过.then为第一个promise实例指定成功之后的回调函数
//     console.log(r1);
//     return thenFs.readFile('./files/2.txt', 'utf8') //3. 在第一个.then中返回一个新的Promise实例对象
// })
// .then((r2) => { //4.继续调用.then，为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
//     console.log(r2);
//     return thenFs.readFile('./files/3.txt', 'utf8') //5.在第二个 .then中返回一个新的Promise实例对象
// })
// .then((r3) => { //6. 继续调用 .then 为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
//     console.log(r3);
// })

// const thenFs = require("then-fs");

// .then链式调用的优点：解决了回调地狱的问题
// .then调用的缺点：代码冗余、阅读性差，不易理解

// 2. async/await 的基本使用

// 使用async/await简化Promise异步操作的示例代码如下：
// 按照顺序读取文件1，2，3的内容
// async function getAllFile() {
//     const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
//     console.log(r1);
//     const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
//     console.log(r2);
//     const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
//     console.log(r3);
// }

// getAllFile()

// 3. async/await的使用注意事项
// 1） 如果在function中使用了await,则function必须被async修饰
// 2） 在async方法中，第一个await之前的代码会同步执行，await之后的代码会异步执行
// 例如：

console.log('A');
async function getAllFile() {
    console.log('B');
    const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
    const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
    const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
    console.log(r1, r2, r3);
    console.log('D');

}
getAllFile()
console.log('C');

// 最终输出的顺序
// A
// B
// C
// 111 222 333
// D

// 执行到await时，会退出函数，接着往下执行代码

