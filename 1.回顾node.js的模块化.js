//1. nodejs遵循了CommonJS的魔魁阿花规范，其中：
//  导入其他模块使用require()方法
//  模块对外共享成员使用module.exports方法

// 模块化的好处：
// 大家都遵守同样的模块化规范写代码，降低了沟通的成本，极大地方便了各个模块之间的相互调用


// 2. 前端模块化的分类
// 在ES6模块化规范诞生之前，JavaScript社区已经尝试并提出了AMD、CMD、CommonJS等模块化规范

// 但是，这些社区提出的模块化标准，还是存在一定的差异性与局限性、并不是浏览器与服务器通用的模块化标准
// 例如：
// AMD和CMD适用于浏览器端的Javascript模块化
// CommonJS适用于服务器端的JavaScript模块化

// 太多的模块化规范给开发者增加了学习的难度与开发的成本。因此，大一统的ES6模块化规范诞生了

// 3.什么是ES6模块化规范
// ES6模块化规范是浏览器端与服务器端通用的模块化规范。它的出现极大地降低了前端开发者的模块化学习成本
// 开发者不需要额外学习AMD、CMD或COMMONJS等模块化规范

// ES6模块化规范中定义：
//    每个JS文件都是一个独立的模块
//    导入其他模块使用import关键字
//    向外共享模块成员使用export关键字

// 4.在node.js中默认仅支持CommonJS模块化规范，若想基于node.js体验与学习ES6的模块化语法，可以按照如下
// 两个步骤进行配置：
//   1）确保安装了v14.5.1或更高版本的node.js
//   2）在package.json的根节点中添加"type":"module节点"
//  3) 

// 5.ES6模块化的基本语法
// es6模块化主要包含以下3种用法
//   1）默认导出与默认导入
//   2）按需导出与按需导入
//   3）直接导入并执行模块中的代码

// 5.1 默认导出
// 默认导出的语法： export default 默认导出成员， 示例：
// let n1 = 10
// let n2 = 20  定义模块私有成员n2（外界访问不到n2，因为它没有被共享出去）
// function show() {} //定义模块私有化方法show

// export default { //使用export default到处默认语法，向外共享n1和show两个成员
// n1,
// show
// }

// 5.1默认导入
// 默认导入的语法： import 接收名称 from ‘模块标识符’

// 从 01_m1.js 模块中导入export default 向外共享的成员
// 并使用m1成员进行接收
// import m1 from './01_m1.js'

// 打印输出的结果为：
// {n1:10, show:[Function: show]}
// console.log(m1);

// 5.1 默认导出的注意事项
// 每个模块中，只允许使用唯一的一次export default, 否则会报错
// 错误示例：
// export default {
//     n1,
//     show
// }
// export default {
//     n2
// }

// 5.1 默认导入的注意事项
// 默认导入的接收名称可以任何名称，只要是合法的成员名称即可：
// import m1 from './01_m1.js'

// 123m不是合法的名称，因为成员名称不会以数字开头
// import 123m './01_m1.js'

// 5.2 按需导出
// 按需导出的语法： export按需导出的成员
// 当前模块为 03_m2.js

// 按外按需导出变量 s1
// export let s1 = 'aaa'
// 向外按需导出变量 s2
// export let s2 = 'ccc'
// 向外按需导出方法 say
// export function say(){}

// 5.2 按需导入
// 按需导入的语法： import {s1} from '模块标识符'

// 导入模块成员
// import {s1, s2, say} from './03_m2.js'

// console.log(s1); //打印输出aaa
// console.log(s2); //打印输出ccc
// console.log(say); // 打印输出[Function: say]

// 5.2 按需导出与按需导入的注意事项
// 1）每个模块中可以使用多次按需导出
// 2）按需导入的成员名称必须和按需导出的名称一致
// 3） 按需导入时，可以使用as关键字进行重命名
// 4） 按需导入可以和默认导入一起使用（按需导入成员写入花括号内，默认导入成员写在花括号内）

// import info, {s1, s2 as str, say} from './03_按需导入.js'

// 5.3 直接导入并执行模块中的代码
// 如果只想单纯的执行某个模块中的代码，并不需要得到模块中向外共享的成员，此时，可以直接导入并执行模块代码

// 当前文件模块为 05_m3.js

// 在当前模块中执行一个for循环操作
// for(let i=0;i<3;i++) {
//     console.log(i);
// }

// --------------分割线---------------

// 直接导入并执行模块代码，不需要得到模块向外共享的成员
// import './05_m3.js'

