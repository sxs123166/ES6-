
// 3.1 上一个章节无法保证文件的读取顺序，需要做进一步的改进

const thenFs = require("then-fs");

// 3.2 then()方法的特性
// 如果上一个.then()方法中返回了一个新的Promise实例对象，则可以通过下一个.then()继续进行处理。通过.then()方法的
// 链式调用，就解决了回调地狱的问题

// 3.3 基于Promise 按顺序读取文件的内容
// Promise支持链式调用，从而来解决回调地狱的问题。示例代码为：
thenFs.readFile('./files/1.txt', 'utf8') //1.返回值是promise的实例对象
.then((r1) => { //2.通过.then为第一个promise实例指定成功之后的回调函数
    console.log(r1);
    return thenFs.readFile('./files/2.txt', 'utf8') //3. 在第一个.then中返回一个新的Promise实例对象
})
.then((r2) => { //4.继续调用.then，为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
    console.log(r2);
    return thenFs.readFile('./files/3.txt', 'utf8') //5.在第二个 .then中返回一个新的Promise实例对象
})
.then((r3) => { //6. 继续调用 .then 为上一个.then的返回值（新的promise实例）指定成功之后的回调函数
    console.log(r3);
})