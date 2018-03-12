<template>
  <div class="xg-form">
    <el-form ref="noteForm" :rules="rules" :model="form" label-width="60px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="date">
        <el-col :span="18">
          <el-date-picker type="datetime" 
          placeholder="选择日期" 
          v-model="form.date" 
          style="width: 100%;">
          </el-date-picker>
        </el-col>      
      </el-form-item>
      <el-form-item label="标签" prop="tag">
        <el-select v-model="form.tag" placeholder="请选择标签类型">
          <el-option label="蓝色" value="primary">
            <span style="float: left">蓝色</span>
            <span style="float: right; color: #409eff;">
              <i class="icon icon-tag"></i>
            </span>
          </el-option>
          <el-option label="绿色" value="success">
            <span style="float: left">绿色</span>
            <span style="float: right; color: #67c23a;">
              <i class="icon icon-tag"></i>
            </span>
          </el-option>
          <el-option label="灰色" value="info">
            <span style="float: left">灰色</span>
            <span style="float: right; color: #909399;">
              <i class="icon icon-tag"></i>
            </span>
          </el-option>
          <el-option label="黄色" value="warning">
            <span style="float: left">黄色</span>
            <span style="float: right; color: #e6a23c;">
              <i class="icon icon-tag"></i>
            </span>
          </el-option>
          <el-option label="红色" value="danger">
            <span style="float: left">红色</span>
            <span style="float: right; color: #f56c6c;">
              <i class="icon icon-tag"></i>
            </span>
          </el-option>
        </el-select>
      </el-form-item>        
        <el-form-item label="是否收藏" label-width="80px"> 
        <el-switch v-model="form.collect"></el-switch>
      </el-form-item>
      <el-form-item label="是否完成" label-width="80px"> 
        <el-switch v-model="form.finish"></el-switch>
      </el-form-item>
      <el-form-item label-width="0" class="form-btn-group">
        <el-button type="primary" @click="submitForm('noteForm')">提交</el-button>
        <el-button @click="resetForm('noteForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        id: "",
        title: "",
        content: "",
        tag: "",
        date: "",
        finish: false,
        collect: false
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        tag: [{ required: true, message: "请选择标签类型", trigger: "change" }],
        date: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ]
      }
    };
  },
  mounted() {
    this.getNoteId();
  },
  methods: {
    getNoteId() {
      // id:1-9999
      let notes = localStorage.getItem("notes") || "[]";
      let id = Math.floor(Math.random() * 9998 + 1);
      notes = JSON.parse(notes);
      while (this.isExistId(id, notes)) {
        id = Math.floor(Math.random() * 9998 + 1);
      }
      this.form.id = id;
    },
    isExistId(id, notes) {
      notes.some(n => n.id == id);
    },
    resetForm(formName) {
      // 重置表单
      this.form.finish = false;
      this.form.collect = false;
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      // 验证表单
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 成功
          let notes = localStorage.getItem("notes") || "[]";
          notes = JSON.parse(notes);
          notes.push(this.form);
          notes = JSON.stringify(notes);
          localStorage.setItem("notes", notes);
          this.$messagebox.alert("添加成功！").then(action => {
            this.$router.push("/");
          });
        } else {
          // 失败
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.xg-form {
  margin-top: 10px;
}
.form-btn-group {
  text-align: center;
}
</style>
