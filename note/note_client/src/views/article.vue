<template>
  <div class="article">
    <div class="author-msg" v-if="content.author">
      <div class="img-wrap">
        <img :src="content.author.avatar">
      </div>
      <div class="author-item">
        <div class="author-username">
          {{content.author.username}}
        </div>
        <div class="author-other"> 
          <div class="created-time">
            {{content.createTime}}
          </div>
          <div class="readnum">
           阅读 {{content.readnumber}}
          </div>
        </div>
      </div>
    </div>
    <div class="title">
      {{content.title}}
    </div>
    <div class="content" v-html="content.content"></div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        content: {}
      }
    },
    methods:{
      getContent(){
        this.$axios.get(`/article/${this.$route.params.id}`).then(res => {
          if(res.code == 200){
            let time = res.data.createTime 
            res.data.createTime = new Date(time).toLocaleString()
            this.content = res.data
          }
        })
      }
    },
    created(){
      this.getContent()
    }
  }
</script>

<style scoped lang="scss">
.article{
  width: 900px;
  margin:30px auto;
  background: #fff;
  padding: 30px;

  .author-msg{
    display:flex;

  .author-item{
    margin-top: 10px;
    margin-left:10px;

    .author-username{
      font-weight: 700;
    }

    .author-other{
      display: flex;
      font-size: 14px;
      color:#909090;

      .readnum{
        margin-left:10px;
      }
    }
  }

    img{
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .title{
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
  }

  .content{
    line-height:2;
  }
}

</style>