<template>
  <div class="xg-form">
    <el-form ref="noteForm" :rules="rules" :model="form" label-width="60px">
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="form.content"></el-input>
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
        <el-button :loading="loading" type="primary" @click="submitForm('noteForm')">提交</el-button>
        <el-button :loading="reset" @click="resetForm('noteForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getID, local } from "@/utils";

export default {
  data() {
    return {
      notes: [],
      loading: false,
      reset: false,
      form: {
        id: "",
        title: "",
        content: "",
        tag: "",
        finish: false,
        collect: false,
        create_at: "",
        update_at: ""
      },
      rules: {
        title: [{ required: true, message: "请输入标题", trigger: "blur" }],
        content: [{ required: true, message: "请输入内容", trigger: "blur" }],
        tag: [{ required: true, message: "请选择标签类型", trigger: "change" }]
      }
    };
  },
  mounted() {
    this.getData();
    // 初始化id date tag
    this.getNoteId();
    this.form.tag = "primary";
  },
  methods: {
    saveData(newNotes) {
      local.set("notes", newNotes);
    },
    getData() {
      this.notes = local.get("notes");
    },
    getNoteId() {
      let id = getID();
      while (this.findNoteById(id)) {
        id = getID();
      }
      this.form.id = id;
    },
    findNoteById(id) {
      this.notes.some(n => n.id == id);
    },
    resetForm(formName) {
      // 重置表单
      this.reset = true;
      setTimeout(() => {
        this.$refs[formName].resetFields();
        this.form.finish = false;
        this.form.collect = false;
        this.form.tag = "primary";
        // reset flag
        this.reset = false;
      }, 100);
    },
    submitForm(formName) {
      this.loading = true;
      // Indicator
      this.$indicator.open({
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        this.$indicator.close();
        // 验证表单
        this.$refs[formName].validate(valid => {
          if (valid) {
            // 成功
            this.form.create_at = new Date();
            this.notes.push(this.form);
            this.saveData(this.notes);
            this.$messagebox.alert("新建成功").then(action => {
              this.$router.push("/");
            });
          } else {
            // 失败
            this.$toast({ message: "新建失败" });
            return false;
          }
        });
        // btn loading flag
        this.loading = false;
      }, 1000);
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
