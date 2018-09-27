var {Router} = require('express');
var router = Router();

const register = require('./register')
const login = require('./login')

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(register)
router.use(login)

module.exports = router;