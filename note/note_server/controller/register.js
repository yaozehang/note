const {Router} = require('express')
const router = Router()
const user = require('../database/model/user')
const isEmail = require('validator/lib/isEmail');
const md5 = require("blueimp-md5");

router.post('/register', (req, res) => {
  let addData = req.body;

  user.findOne({email:addData.email}).then(data => {
    if(data) {
      res.json({
        code:401,
        msg:'邮箱已被注册'
      })
    } else {
      if(isEmail(addData.email)){
        addData.password = md5(addData.password);
        // addData.createtime = +new Date();
        user.create(addData).then( data => {
          console.log(data);
          res.json({
            code:200,
            data,
            msg:'success'
          })
        })
      } else {
        res.json({
          code:401,
          msg:'邮箱格式不正确'
        })
      }
    }
  })

})

module.exports = router;