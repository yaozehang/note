<template>
  <div class="article-wrap">
    <router-link :to="{name:'article',params:{id: item._id}}" v-for="item in articleData" v-bind:key="item._id" class="link">
    <div class="article-item">
      <div class="article-msg">
        <div class="row1"> 
          <div class="avatar">
            <img :src="item.author.avatar">
          </div>
          <div class="author">
            <div class="author-msg">
              <span class="author-name" v-text="item.author.username">
                
              </span>
              <span class="divide">
                |
              </span>
              <span class="article-title" v-text="item.title">
               
              </span>
            </div>
          <div class="article-strong">
            <span class="strong" >
              浏览: <span v-text="item.readnumber"></span>
            </span>
            <span class="strong">
              回复: <span v-text="item.commonnum"></span>
            </span>
            <span class="strong">
              分类: <span v-text="item.category.name"></span>
            </span>
          </div>
          </div>
          
          </div>
        </div>     
    </div>
    <div class="article-content" v-text="item.contentText">
    </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleData:[],
      count:0,
    };
  },
  methods: {
    getArticle(){
      this.$axios.get('/article').then(res => {
        this.articleData = res.data
        this.count = res.count
      })
    },
  },
  created() {
      this.getArticle();    
  },
};
</script>

<style scoped lang="scss">
.article-wrap{
  margin-top: 30px;
  width:750px;
  background: #fff;
  border-radius:6px;
  overflow:hidden;

  .link{
    text-decoration: none;
    color:inherit;
  }

  .row1{
    display:flex;
  }

  .avatar{
    padding: 5px;

      img{
      width: 70px;
      height: 70px;
    }
  }
  

  .author{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .author-msg{
    margin-bottom:5px;
    font-size:16px;
    font-weight: 600;

    .author-name{
      color:#00a1d6
    }
  }

  .article-strong{
    display: flex;
    justify-content: space-between;
    width: 350px;
    padding: 5px 300px 5px 5px;
    background: #bbb;
    font-size:13px;
    font-weight: 450;
  }

  .article-content{
    font-family:YouYuan;
    font-size:18px;
    text-indent:20px;
    width: 600px;
    margin-left:80px;
    padding-bottom:20px;
  }
}


</style>