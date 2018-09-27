const mongoose = require('mongoose');

const user = new mongoose.Schema({
  username:String,
  email: {
    type:   String,
    unique: true
  },
  password: String,
  // createtime: Date,
  avatar: {
    type: String,
    default:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=164802939,3427154249&fm=27&gp=0.jpg'
  }
},{versionKey: false,timestamps:{createdAt:'createTime',updatedAt:'updateTime'}});


module.exports = mongoose.model('user',user)