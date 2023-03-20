
// 1. 案例需求
// 基于MySql数据库+Express对外提供用户列表的API接口服务。用到的技术点为：
//   第三方包express和mysql2
//   ES6模块化
//   Promise
//   async/await

// 2. 主要的实现步骤
// 1）搭建基本的项目结构
// 2）创建最基本的服务器
// 3）创建db数据库操作模块
// 4）创建user_ctrl模块
// 5）创建user_router模块

// 3.搭建项目的基本结构
// 1） 启用ES6模块化支持
    // 在package.json中声明“type”: "module"
// 2) 安装运行第三方依赖包
    // 运行 npm install express@4.17.1 mysql2@2.2.5
    
// 4. 创建基本的服务器

// 使用ES6的默认导入语法
// import express from 'express'
// const app = express()

// app.listen(80, ()=> {
//     console.log('server running at http://127.0.0.1');
// })

// 5.创建db数据库操作模块
// import mysql from 'mysql2'

// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     port: 3306,
//     database: 'my_db_01', //请填写要操作的数据库的名称
//     user: 'root', //请填写登陆数据库的用户名
//     password: 'admin123' //填写登陆数据库的密码
// })

// 默认导出一个支持promise API的 pool
// export default pool.promise()

// 6.创建user_ctrl模块
// import db from '../db/index.js'

// 获取所有用户的列表数据
// export async function getAllUser(req, res) {
//     // db.query() 函数的返回值是 Promise 的实例对象。因此，可以使用async/await 进行简化
//     const [rows] = await db.query('select id, username,nickame from ev_users')
//     res.send({
//         status: 0,
//         message: '获取用户列表成功',
//         data: rows,
//     })
// }

// 7. 创建user_router模块
// import express from 'express'
// 从user_ctrl.js 模块中按需导入 getAllUser 函数
// import {getAllUser} from '../controller/user_ctrl.js'

// 创建路由对象
// const router = new express.Router()
// 挂载路由规划
// router.get('user', getAllUser)

// 使用ES6的默认导出语法， 将路由对象共享出去
// export default router

// 8.导入并挂载路由模块
// import express from 'express'
// 1). 使用默认导入语法，导入路由对象
// import userRouter from './router/user_router.js'
// const app = express()
// 2). 挂载用户路由模块
// app.use('/api', userRouter)

// app.listen(80, () => {
//     console.log('server running at http://127.0.0.1');
// })

