<template>
  <div class="right-box">
    <div class="login" v-if="!usermsg.username">
      <div class="item" style="margin-top:0"> 
        <input type="text" placeholder="请输入邮箱" v-model="email">
      </div>
      <div class="item">
        <input type="password" placeholder="请输入密码" v-model="password" @keyup.enter="handleLogin">
      </div>
      <div class="item">
        <el-button type="primary" class="el_btn" @click="handleLogin">登录</el-button>
      </div>
      <div class="item">
        <el-button class="el_btn" @click="handleRegister">注册</el-button>
      </div>
      <div class="item">
      <p style="color:#999;font-size:18px;">this note is very pretend bility</p>
      </div>
      <div class="item">
        <p style="color:#999;font-size:22px;">IT牛人都在用的笔记</p>
      </div>
    </div>
    <div class="user-box" v-else>
      <div class="user-box-item user-icon">
        <img :src="usermsg.avatar">
      </div>
      <div class="name-item">
          {{usermsg.username}}
      </div>
      <div class="email-item">
        email:  {{usermsg.email}}
      </div>
      <div>
        <el-button type="warning" style="width: 100%;margin-top: 10px;" @click="handleLoout">
          退出登陆
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          email:'',
          password:'',
          usermsg: {
            username: '',
            email: '',
            avatar: ''
        }
      }
    },
    methods: {
      handleLogin() {
        let data = {
          email :this.email,
          password : this.password,
        }
        this.$axios.post('/login',data).then(res => {
          if(res.code == 200){
            console.log(res)
            this.$store.commit('CHANGE_USERINFO',res.data)
            this.initData()
            this.$message.success(res.msg)
            this.$router.push('/')
          }else{
            this.$message.error(res.msg)
          }
        })
      },
      handleRegister(){
        this.$router.push('/register')
      },
      handleLoout () {
        this.usermsg.username = ""
        this.$axios.delete('/logOut').then(res => {
          if(res.data.code == 200){
            sessionStorage.clear();
            this.$message.success(res.data.msg)
          }
          else {
            alert(res.data.msg);
          }
        })
      },
      initData(){
        this.usermsg = this.$store.state.userinfo
      },
    },
    created(){
      this.initData()
    }
  }
</script>

<style scoped lang="scss">
.right-box{
  box-sizing: border-box;
  width: 360px;
  background-color: #fff;
  border-radius: 4px;
  padding: 21px 30px;
}

.item{
  margin-top: 30px;
  text-align: center;
  .el_btn{
    width: 100%;
  }

  & > input{
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 14px;
    outline: none;
  }
}

.user-box {
    padding: 30px 0;
    .user-icon {
      text-align: center;
      img {
        width: 100px;
        height: 100px;
      }
    }
    .name-item{
      text-align: center;
      margin-top: 20px;
      font-size: 26px;
      color: #333;
      font-weight: 400;
      line-height: 36px;
    }

    .email-item{
      font-family: STHupo;
      text-align: center;
      margin-top: 20px;
      color:#bbb;
    }
  }
</style>