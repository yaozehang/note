const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cloud_book');
var db = mongoose.connection;
db.on('error', console.error.bind(console, '连接失败'));
db.once('open', function() {
  // we're connected!
  console.log("连接成功")
});

module.exports = db;