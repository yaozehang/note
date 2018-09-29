<template>
    <header class="layout-header">
      <div class="w1170 wrap">
        <h1 @click="$router.push('/')">云笔记</h1>
        <div class="h-right">
          <img src="/static/img/search.png" @click="$router.push('/search')">
          <el-button class="write-btn" @click="toWrite">
          写笔记
          </el-button>
        </div>
      </div>
    </header>
</template>

<script>
    export default {
      data(){
        return {
          username:''
        }
      },
      methods:{
        getData(){
          this.username = this.$store.state.userinfo.username
        },
        toWrite(){
          if(this.username){
            this.$router.push('/writeNote')
          } else {
            this.$message.info('请先登录哦')
          }
        }
      },
      created(){
        this.getData()
      }
    }
</script>


<style scoped lang="scss">
  .layout-header {
    height: 50px;
    background: #409eff;
  }
  .wrap {
    display: flex;
    justify-content: space-between;
    h1 {
      margin-top: 5px;
      color: #fff;
      font-weight: 400;
      font-size: 30px;
      cursor: pointer;
    }
    .write-btn {
      margin-top: 5px;
    }
    .h-right{
      display: flex;
        img{
        margin-right: 10px;
        margin-top: 5px;
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
</style>