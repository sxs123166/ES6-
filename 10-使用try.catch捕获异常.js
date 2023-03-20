
// 使用try..catch捕获异常
export async function getAllUser(req, res) {
    //使用try catch捕获promise异步任务中产生的异常错误，并在catch块中进行处理
    try {
        //ev_users 表中没有xxx字段， 所以SQL语句会 “执行异常”
        const [rows] = await db.query('select id,username,nickname,xxx from ev_users')
        res.send({status:0 ,message:'获取用户列表成功', data: rows})

    }catch(e) {
        res.send({status: 1, message: '获取用户列表失败', desc:e.message})
    }
}
