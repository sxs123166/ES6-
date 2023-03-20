
// 方法的封装要求：
// 1） 方法的名称要定义为 getFile
// 2) 方法接受一个形参fpath,表示读取文件的路径
// 3）方法的返回值为 promise的实例对象

// 1.getFile方法的基本定义

// 方法的名称为getFile
// 方法接受一个形参fpath，表示要读取的路径
// function getFile(fpath) {
//     // 方法的返回值为 promise 的实例对象
//     return new Promise()
// }
// 注意：第五行代码中的 new Promise() 只是创建了一个形式上的异步操作

// 2.创建具体的异步操作
// 如果想要创建具体的异步操作，则需要在new Promise()构造函数期间，传递一个function函数，将具体的
// 异步操作定义到function函数内部。示例代码为：
// function getFile(fpath) {
//     // 方法的返回值为 promise 的实例对象
//     return new Promise(function() {
//         // 4. 下面这行代码，表示这是一个具体的、读文件的异步操作
//         fs.readFile(fpath,'utf8', (err, dataStr) => {})
//     })
// }

// 3.获取.then的两个实参
// 通过.then()指定的成功和失败的回调函数，可以在function的形参中进行接受,示例代码为：
// function getFile(fpath) {
//     // 方法的返回值为 promise 的实例对象
//     return new Promise(function() {
//         // 4. 下面这行代码，表示这是一个具体的、读文件的异步操作
//         fs.readFile(fpath,'utf8', (err, dataStr) => {})
//     })
// }

// getFile 方法的调用过程
// getFile('./files/1.txt').then(成功的回调函数,失败的回调函数)

// 4. 调用resolve和reject 回调函数
// Promise异步操作的结果，可以调用resolve或reject回调函数进行处理,示例代码代码为：
// function getFile(fpath) {
//     // 方法的返回值为 promise 的实例对象
//     return new Promise(function() {
//         // 4. 下面这行代码，表示这是一个具体的、读文件的异步操作
//         fs.readFile(fpath,'utf8', (err, dataStr) => {
// if(err) return reject(err)  //如果读取失败,调用失败的回调函数
// resolve(dataStr)
// })
//     })
// }
