const {Router} = require('express')
const router = Router()
const articleModle = require('../database/model/article')
const categoryModle = require('../database/model/category')

router.post('/article', async (req, res, next) => {
  try{
    if(req.session.user) {
      const {content, contentText, title, category} = req.body
      const data = await articleModle.create({content, contentText, title, category, author: req.session.user._id})

      res.json({
        code:200,
        msg:'笔记发布成功',
        data
      })
    } else {
      res.json({
        code:403,
        msg:'未登录,无法发布笔记'
      })
    }
  } catch(err) {
    next(err)
  }
    
})

router.get('/article',(req, res) => {
  let {pn, size} = req.query
  pn = parseInt(pn)
  size = parseInt(size)

  articleModle.find()
  .skip((pn-1)*size)
  .limit(size)
  .populate({
    path:'author',
    select:'-password -email'
  })
  .populate({
    path:'category',
    select:'name'
  })
  .then(data => {
    res.json({
      code:200,
      count:data.length,
      data
    })
  })
})

router.get('/article/:id',(req, res) => {
  const {id} = req.params
  articleModle.findById(id)
  .populate({
    path:'author',
    select:'-password -email'
  })
  .populate({
    path:'category',
    select:'name'
  })
  .then(data => {
    res.json({
      code:200,
      data
    })
  })
})

router.get('/search',(req, res) => {
  let {title} = req.query

  articleModle.find({title})
  .populate({
    path:'author',
    select:'-password -email'
  })
  .populate({
    path:'category',
    select:'name'
  })
  .then(data => {
    res.json({
      code:200,
      count:data.length,
      data
    })
  })
})

module.exports = router

