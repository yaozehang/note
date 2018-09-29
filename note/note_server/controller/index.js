var {Router} = require('express');
var router = Router();

const register = require('./register')
const login = require('./login')
const article = require('./article')
const category = require('./category')
const user = require('./user')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(register)
router.use(login)
router.use(article)
router.use(category)
router.use(user)

module.exports = router;