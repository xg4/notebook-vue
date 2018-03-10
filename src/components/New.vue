<template>
  <div class="xg-form">
      <el-form ref="form" :model="form" label-width="40px">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="内容">
            <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="时间">
            <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="标签类型" label-width="80px">
            <el-select v-model="form.tagType" placeholder="请选择标签类型">
            <el-option label="蓝色" value=""></el-option>
            <el-option label="绿色" value="success"></el-option>
            <el-option label="灰色" value="info"></el-option>
            <el-option label="黄色" value="warning"></el-option>
            <el-option label="红色" value="danger"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="是否完成" label-width="80px"> 
            <el-switch v-model="form.finish"></el-switch>
        </el-form-item>
        <el-form-item label="是否收藏" label-width="80px"> 
            <el-switch v-model="form.collect"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: "",
        content: "",
        tagType: "",
        date1: "",
        date2: "",
        finish: false,
        collect: false
      }
    };
  },
  methods: {
    resetForm() {
      this.$router.push("/");
    },
    submitForm() {
      if (this.form.date2) {
        this.form.date = this.form.date2;
      } else {
        this.form.date = this.form.date1;
      }
      let notes = localStorage.getItem("notes") || "[]";
      notes = JSON.parse(notes);
      notes.push(this.form);
      notes = JSON.stringify(notes);
      localStorage.setItem("notes", notes);
      this.$messagebox.alert("添加成功！").then(action => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style scoped>
.xg-form {
  margin-top: 10px;
}

.line {
  text-align: center;
}
</style>
