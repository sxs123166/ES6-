
// 1.回调地狱
// 多层回调函数的相互嵌套，就形成了回调地狱。示例代码为：
// setTimeout(() => {  //第一层回调函数
//     console.log('延时1秒后输出');

//     setTimeout(() => { //第二层回调函数
//         console.log('再延时2秒后输出');

//         setTimeout(() => { //第三层回调函数
//             console.log('再延时3秒后输出');
//         }, 3000)
//     },2000)
// }, 1000)

// 1.1 如何解决回调地狱的问题
// 为了解决回调地狱的问题，ES6中新增了Promise的概念

// 1.2 Promise的基本概念

//  1）promise是一个构造函数
    //  我们可以创建Promise的实例 const p = new Promise()
    // new 出来的Promise实例对象，代表一个异步操作

//    2）promise.prototype上包含一个.then方法
    //  每一次new promise() 构造函数得到的实例对象
    //    都可以通过原型链的方式访问到.then方法，例如p.then 

//  3) .then()方法用来预先指定成功和失败的回调函数
    // p.then(成功的回调函数，失败的回调函数)
    // p.then(result=>{}, error=>{})
    // 调用.then方法时，成功的回调函数是必选的，失败的回调函数时可选的

// 2. 基于回调函数按顺序读取文件内容

//读取文件 1.txt
// fs.readFile('./files/1.txt', 'utf8', (err, r1) => {
//     if(err1) return console.log(err1.message); //读取文件1 失败
//     console.log(r1); //读取文件1成功
//     //读取文件2.txt
//     fs.readFile('./files/2.txt', 'utf8', (err, r2) => {
//         if(err2) return console.log(err2.message);//读取文件2失败
//         console.log(r2);//读取文件2成功
//         // 读取文件.txt
//         fs.readFile('./files/3.txt', 'utf8', (err3, r3) => {
//             if(err3) return console.log(err3.message);//读取文件3失败
//             console.log(r3);//读取文件3成功
//         })

//     })
// })

// 3. 基于 then-fs 读取文件内容
// 由于node.js官方提供的fs模块仅支持以回调函数的方式读取文件，不支持Promise的调用方式。因此，需要先运行
// 如下的命令，安装then-fs这个第三方包，从而支持我们基于promise的方式读取文件的内容。
// npm install then-fs

// 调用then-fs提供的readFile()方法,可以异步的读取文件的内容，他的返回值是Promise的实例对象
// 因此可以调用.then()方法为每sudo个Promise异步操作指定成功和失败之后的回调函数，示例代码为：
// 基于promise方式读文件
// import thenFs from 'then-fs'
// thenFs.readFile('./files/1.txt', 'utf8').then(r1 => {console.log(r1)}, err1=>{console.log(err1.messaage)})
// thenFs.readFile('./files/2.txt', 'utf8').then(r2 => {console.log(r2)}, err2=>{console.log(err2.messaage)})
// thenFs.readFile('./files/3.txt', 'utf8').then(r3 => {console.log(r3)}, err3=>{console.log(err3.messaage)})

// 上述的代码无法保证文件的读取顺序，需要进一步的改进

