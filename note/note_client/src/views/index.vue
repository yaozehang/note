<template>
  <div>
    <div class="top-box w980">
      <div class="box-left">
         <Banner></Banner>
         <Article></Article>
      </div>
      <Userbox></Userbox>
    </div>
  </div> 
</template>

<script>
  import Userbox from "../components/Userbox.vue"
  import Banner from '../components/Banner.vue'
  import Article from '../components/Article.vue'

  export default {
    components:{
      Banner,
      Userbox,
      Article
    }
  }
</script>

<style scoped>
.box-left {
    width: 750px;
    margin-bottom:30px;
  }
  .top-box {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>