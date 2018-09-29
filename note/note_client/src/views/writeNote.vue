<template>
  <div class="write-note">
    <div class="main-content w1170">
      <div class="title">
        标题
      </div>
      <div class="input-wrap">
        <el-input v-model="formData.title"></el-input>
      </div>
      <div class="title">
        内容
      </div>
      <quill-editor
      v-model="formData.content"
      ref="myQuillEditor"
      :options="editorOption"
      @change="handleChange"
      >
      </quill-editor>

      <div class="category">
        <div class="strong">
          标签：
        </div>
          <el-checkbox-group v-model="selectLabel"  size="medium " border="true">
            <el-checkbox-button v-for="label in labels" :label="label" :key="label._id">
              {{label.name}}
            </el-checkbox-button>
          </el-checkbox-group>

            <div type="text" @click="dialogVisible = true" class="add">
              <span>
                +
              </span>
            </div>

            <el-dialog
              title="添加"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose">
              <el-input  v-model="newCategory.name" placeholder="请输入内容"></el-input>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="addCategory">提 交</el-button>
              </span>
            </el-dialog>
        </div> 
            <el-button type="primary" @click="handlePost">
              发布笔记
            </el-button>
    </div>
  </div>
</template>

<script>
import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

Quill.register("modules/ImageExtend", ImageExtend);
export default {
  components: { quillEditor },
  data() {
    return {
      labels: [],
      selectLabel: [],
      formData: {
        title: "",
        content: "",
        contentText: "",
        category: ""
      },
      dialogVisible: false,
      newCategory:{
        name:''
      },
      // 富文本框参数设置
      editorOption: {
        modules: {
          ImageExtend: {
            loading: true,
            name: "img",
            action: "https://qiniu.com",
            response: res => {
              return res.info;
            }
          },
          toolbar: {
            container: container,
            handlers: {
              image: function() {
                QuillWatch.emit(this.quill.id);
              }
            }
          }
        }
      }
    };
  },
  methods: {
    getlabels() {
      this.$axios.get("/category").then(res => {
        this.labels = res.data;
      });
    },
    handleChange({ quill, html, text }) {
      this.formData.contentText = text;
      this.formData.contentText = this.formData.contentText.substring(0, 200) + "..."
    },
    handlePost() {
      let params = {
        title: this.formData.title,
        content: this.formData.content,
        category: this.selectLabel[0]._id,
        contentText: this.formData.contentText
      };

      this.$axios.post("/article", params).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.$message.success(res.msg);
          setTimeout(() => {
            this.$router.push("/");
          }, 500);
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    addCategory() {
      this.$axios.post("/category",this.newCategory).then(res => {
        if (res.code == 200) {
          this.$message.success(res.msg);
          this.dialogVisible = false;
          this.getlabels();
        } else {
          this.$message.error(res.msg);
        }
      });
    },
    handleClose() {
      this.dialogVisible = false
    }
  },
  created() {
    this.getlabels();
  }
};
</script>

<style scoped lang="scss">
.main-content {
  margin-top: 30px;
  background: #fff;
  border-radius: 6px;
  padding: 30px;
  box-sizing: border-box;

  .title {
    font-size: 20px;
    font-weight: 600;
    line-height: 2;
    color: #444;
  }
  .category {
    display: flex;
    margin: 30px 0;

    .strong {
      color: #409eff;
      font-weight: 600;
      font-size: 14px;
      line-height: 2;
    }

    .add {
      width: 50px;
      text-align: center;
      line-height: 1.5;
      cursor: pointer;

      span {
        font-size: 20px;
      }

      span:hover {
        color: #409eff;
      }
    }
  }
}
</style>
<style>
.ql-container {
  height: 300px;
}
</style>
