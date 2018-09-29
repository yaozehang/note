const {Router} = require('express')
const router = Router()
const user = require('../database/model/user')

router.get('/user/:id',(req, res) => {
  user.findOne(req.params).then(data => {
    res.json({
      code:200,
      data
    })
  })
})

module.exports = router