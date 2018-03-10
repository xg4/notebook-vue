<template>
  <label class="xg-checkbox-label">
      <span class="xg-checkbox">
          <input type="checkbox" class="xg-checkbox-input"
          v-model="currentValue">
          <span class="xg-checkbox-core"></span>
      </span>
  </label>
</template>

<script>
export default {
  name: "xg-checkbox",
  props: ["value"],
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>

<style scoped>
.xg-checkbox-core:not(:checked) {
  /* background-color: #d9d9d9; */
  /* border-color: #d9d9d9; */
  border-color: #888;
}
.xg-checkbox-label {
  display: block;
  padding: 0 5px;
}
.xg-checkbox-input {
  display: none;
}
.xg-checkbox-input:checked + .xg-checkbox-core {
  /* background-color: #26a2ff; */
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
  /* background-color: #fff; */
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
  top: 3px;
  left: 6px;
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
