
// 1.什么是宏任务和微任务
// JavaScript把异步任务又做了进一步的划分，异步任务又分为两类，分别是：
// 1）宏任务：
    // 异步Ajax请求
    // setTimeout、setInterval
    // 文件操作 
    // 其他宏任务
// 2）微任务
//    Promise.then、.catch和.finally
//    process.nextTick
//    其他微任务    

// 2. 宏任务与微任务的执行顺序

// 每一个宏任务执行完之后，都会检查是否存在待执行的微任务，
// 如果有，则执行完所有微任务之后，在继续执行下一个宏任务

// 4.分析以下代码的输出顺序

// setTimeout(function() {
//     console.log('1');
// })

// new Promise(function(resolve) {
//     console.log('2');
//     resolve()
// }).then(function() {
//     console.log('3');
// })

// console.log('4');

// 正确的输出顺序： 2431
// 分析：
// 1） 先执行所有的同步任务
    //  执行第25行、第32行代码
// 2）在执行微任务
        // 执行第29行代码
//  3） 在执行下一个宏任务
    // 执行第2行代码

// 经典面试题：分析执行顺序
console.log('1');

setTimeout(function() {
    console.log('2');
    new Promise(function (resolve) {
        console.log('3');
        resolve()
    }).then(function() {
        console.log('4');
    })
})

new Promise(function(resolve) {
    console.log('5');
    resolve()
}).then(function() {
    console.log('6');
})

setTimeout(function() {
    console.log('7');
    new Promise(function (resolve) {
        console.log('8');
        resolve()
    }).then(function() {
        console.log('9');
    })
})

// 正确的输出顺序是：156234789
// 注意：执行下一个宏任务之前，会先检查微任务队列中的任务是否全部执行完毕