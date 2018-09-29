const {Router} = require('express')
const router = Router()
const category = require('../database/model/category')

router.get('/category',(req,res) => {
  category.find().then(data => {
      res.json({
        code:200,
        data
      })
   })
})

router.get('/category/:id',(req, res) => {
  const {id} = req.params
  category.findById(id).then(data => {
    res.json({
      code:200,
      data
    })
  })
})

router.post('/category',(req, res) => {
  const {name} = req.body
  category.create({name}).then(data => {
    res.json({
      code:200,
      msg:'添加分类成功',
      data
    })
  })
})

module.exports = router
