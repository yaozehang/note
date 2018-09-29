const {Router} = require('express')
const router = Router()
const user = require('../database/model/user')
const md5 = require("blueimp-md5");

router.post('/login', (req, res) => {
  let {email, password} = req.body;
  let pass = md5(password)

  user.findOne({email}).then(data => {
    if(!data){
      res.json({
        code:401,
        msg:'该邮箱未注册,请先注册'
      })
    } else {
      if( data.password != pass){
        res.json({
          code:401,
          msg:'密码输入错误'
        })
      } else {
        let userMsg = {
          username: data.username,
          email: data.email,
          avatar: data.avatar
      };
        req.session.user = data
        res.json({
          code:200,
          msg:'登录成功',
          data:userMsg
        })
      }
    }
  })
})

router.delete('/logOut',(req, res) => {
  req.session.destroy( err => {
    if(err){
    console.log(err)
    } else {
      res.clearCookie('yao')
      res.json({
        code:200,
        msg:'退出登录成功'
      })
    }
  })
})

module.exports = router;
