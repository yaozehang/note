<template>
  <div>
    <div class="top-box w980">
      <div class="box-left">
      <Banner></Banner>
      </div>
      <Userbox></Userbox>
    </div>
  </div> 
</template>

<script>
  import Userbox from "../components/Userbox.vue"
  import Banner from '../components/Banner.vue'

  export default {
    components:{
      Banner,
      Userbox
    }
  }
</script>

<style scoped>
.box-left {
    width: 750px;
  }
  .top-box {
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
</style>