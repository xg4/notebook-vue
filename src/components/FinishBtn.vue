<template>
  <label class="xg-checkbox-label" @click.stop>
    <span class="xg-checkbox">
      <input type="checkbox" class="xg-checkbox-input" v-model="currentValue">
      <span class="xg-checkbox-core"></span>
    </span>
  </label>
</template>

<script>
export default {
  name: "xg-finish-btn",
  props: ["value"],
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      // 通知父组件finish改变
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit("input", val);
      // toast 提示
      if (val) {
        this.$toast({
          message: "标记完成"
        });
      } else {
        this.$toast({
          message: "标记未完成"
        });
      }
    }
  }
};
</script>

<style scoped>
.xg-checkbox-core:not(:checked) {
  border-color: #888;
}
.xg-checkbox-label {
  display: inline-block;
  padding: 0 5px;
}
.xg-checkbox-input {
  display: none;
}
.xg-checkbox-input:checked + .xg-checkbox-core {
  border-color: #26a2ff;
}
.xg-checkbox-input:checked + .xg-checkbox-core::after {
  border-color: #26a2ff;
  -webkit-transform: rotate(45deg) scale(1);
  transform: rotate(45deg) scale(1);
}
.xg-checkbox-input[disabled] + .xg-checkbox-core {
  background-color: #d9d9d9;
  border-color: #ccc;
}
.xg-checkbox-core {
  display: inline-block;
  border-radius: 100%;
  border: 2px solid #ccc;
  position: relative;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.xg-checkbox-core::after {
  border: 2px solid transparent;
  border-left: 0;
  border-top: 0;
  content: " ";
  top: 4px;
  left: 7px;
  position: absolute;
  width: 4px;
  height: 8px;
  -webkit-transform: rotate(45deg) scale(0);
  transform: rotate(45deg) scale(0);
  -webkit-transition: -webkit-transform 0.2s;
  transition: -webkit-transform 0.2s;
  transition: transform 0.2s;
  transition: transform 0.2s, -webkit-transform 0.2s;
}
</style>
