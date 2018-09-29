<template>
  <div class="search">
    <div class="search-top">
      <p>云笔记搜索</p>
      <el-input v-model="title" class="search-input" prefix-icon="el-icon-search" @keyup.enter.native="handleSearch"></el-input>
      <el-button type="primary" @click="handleSearch" style="margin-left:5px;">搜索</el-button>
    </div>
    <div class="article">
      <div class="article-wrap">
        <router-link :to="{name:'article',params:{id: item._id}}" v-for="item in articleList" v-bind:key="item._id" class="link">
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
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        title:'',
        articleList:[]
      }
    },
    methods:{
      getData () {
            this.$axios.get('/article').then(res => {
              this.articleList = res.data;
            })
          },
      handleSearch () {
        console.log(this.title)
            this.$axios.get('/search', {
              params: {
                title: this.title
              }
            }).then(res => {
              this.articleList = res.data;
            })
          }
        },
        created () {
          this.getData();
        }
    }
</script>
 
<style scoped lang="scss">
.search{
  height:90vh;
  background: #fff;
  margin-top:10px;
  border-radius: 6px;

  .search-top{
    display: flex;
    width: 750px;
    padding:30px;
    margin:0 auto;

    p{
      font-family: STXinwei;
      line-height: 1.5;
      font-size: 26px;
      font-weight: 700;
      margin-right: 10px;
    }

    .search-input{
      width: 520px;
    }
  }

  .article{
    width: 750px;
    margin:0 auto;
    
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
  }
}
</style>