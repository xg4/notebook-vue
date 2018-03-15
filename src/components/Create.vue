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
        <el-button :loading="loadingFlag" type="primary" @click="submitForm()">提交</el-button>
        <el-button :loading="resetFlag" @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getNoteId } from "@/utils";
import { CREATE_NOTE } from "../store/types";

export default {
  data() {
    return {
      loadingFlag: false,
      resetFlag: false,
      form: {
        id: "",
        title: "",
        content: "",
        tag: "primary",
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
  beforeMount() {
    // 通过utils得到id
    this.form.id = getNoteId();
  },
  methods: {
    resetForm() {
      // 重置表单
      this.resetFlag = true;

      setTimeout(() => {
        this.$refs.noteForm.resetFields();
        this.form.finish = false;
        this.form.collect = false;
        this.form.tag = "primary";

        this.resetFlag = false;
      }, 100);
    },
    submitForm(formName) {
      this.loadingFlag = true;
      // Indicator
      this.$indicator.open({
        spinnerType: "fading-circle"
      });
      setTimeout(() => {
        this.$indicator.close();
        // 验证表单
        this.$refs.noteForm.validate(valid => {
          if (valid) {
            // 验证成功
            this.form.create_at = new Date();
            // dispatch store
            this.$store
              .dispatch(CREATE_NOTE, this.form)
              .then(() => {
                this.$messagebox.alert("新建成功").then(action => {
                  this.$router.push("/");
                });
              })
              .catch(() => {
                this.$toast({ message: "新建失败" });
              });
          } else {
            // 验证失败
            this.$toast({ message: "信息不完整" });
            return false;
          }
        });

        this.loadingFlag = false;
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
