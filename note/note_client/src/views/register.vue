<template>
  <div class="container">
    <h2 class="title">新用户注册</h2>
    <div class="item">
     <label>邮箱</label><input type="text" placeholder="请输入邮箱" v-model="regData.email">
    </div>
    <div class="item">
      <label>用户名</label><input type="text" placeholder="请输入用户名" v-model="regData.username">
    </div>
    <div class="item">
      <label>密码</label><input type="password" placeholder="请输入密码" v-model="regData.password">
    </div>
    <div class="item">
      <el-button type="primary" class="el_btn" @click="handleRegister">
        注册
      </el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        regData:{
          username:'',
          email:'',
          password:'',
        }
      }
    },
    methods:{
      handleRegister(){
        this.$axios.post('/register',this.regData).then(res => {
           if(res.code == 200){
             this.$message.success('注册成功')
             this.$router.push('/')
           }else{
             this.$message.error(res.msg)
           }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.container{
    color: #333;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 714px;
    margin: 0 auto;
    margin-top:30px;
    border-radius: 6px;
    background: #fff;

     h2 {
      text-align: center;
      color: #333;
      font-weight: 400;
    }
}
.item {
    box-sizing: border-box;
    width: 390px;
    margin: 30px auto 0;

    .el-btn {
      width: 100%;
    }

    &>input {
      box-sizing: border-box;
      width: 100%;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      padding: 14px;
      outline: none;
    }

    &>label{
      font-size: 12px;
      vertical-align: top;
      display: inline-block;
    }
  }
</style>