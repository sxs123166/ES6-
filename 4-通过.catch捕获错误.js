
// 1. 通过.catch捕获错误
// 在Promise的链式操作中如果发生了错误，可以使用Promise.prototype.catch方法进行捕获和处理
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
// .catch(err => { //1 捕获第一行发生的错误，并输出错误的消息
//     console.log(err.message);
// })

const thenFs = require("then-fs");

// 如果不希望勤勉的错误导致后面的.then无法正常执行，则可以将.catch的调用提前，示例代码为：
// .then((r1) => { //2.通过.then为第一个promise实例指定成功之后的回调函数
//     console.log(r1);
//     return thenFs.readFile('./files/2.txt', 'utf8') //3. 在第一个.then中返回一个新的Promise实例对象
// })
// .catch(err => { //1 捕获第一行发生的错误，并输出错误的消息
//     console.log(err.message);
// })
// .then((r2) => { //4.继续调用.then，为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
//     console.log(r2);
//     return thenFs.readFile('./files/3.txt', 'utf8') //5.在第二个 .then中返回一个新的Promise实例对象
// })
// .then((r3) => { //6. 继续调用 .then 为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
//     console.log(r3);
// })

// 3.Promise.all()方法
// Promise.all()会发起并行的Promise异步操作，等所有的异步操作全部结束后才会执行下一步的.then操作（等待机制）
// 示例代码为：
// 1）定义一个数组，存放3个度文件的异步操作
// const promiseArr = [
//     thenFs.readFile('./files/l1.txt', 'utf8'),
//     thenFs.readFile('./files/l2.txt', 'utf8'),
//     thenFs.readFile('./files/l3.txt', 'utf8')
// ]
// 2) 将promise的数组，转为Promise.all()的参数
// Promise.all(promiseArr)
//  .then(([r1, r2, r3]) => { //2.1 所有文件读取成功（等待机制）
//     console.log(r1,r2,r3);
//  })

//  .catch(err => { //2.2 捕获Promise异步中的错误
//     console.log(err.message);
//  })

// 注意：数组中Promise 实例的顺序
// 就是最终结果的顺序

// 4. promise.race()方法
// Promise.race()方法会发起并行的promise异步操作，只要任何一个异步操作完成，就立即执行下一步的.then()（赛跑机制）操作
// 示例代码为：
// 1）定义一个数组，存放3个度文件的异步操作
// const promiseArr = [
    //     thenFs.readFile('./files/l1.txt', 'utf8'),
    //     thenFs.readFile('./files/l2.txt', 'utf8'),
    //     thenFs.readFile('./files/l3.txt', 'utf8')
    // ]

 // 2) 将promise的数组，转为Promise.race()的参数
//  Promise.race(promiseArr)
//   .then((ressult) => { //2.1 只要任何一个异步操作完成，就立即执行成功的回调函数（赛跑机制）
//     console.log(result);
//   })
//   .catch(err => { //2.2 捕获 Promise 异步操作中的错误 
//     console.log(err.message);
//   })

