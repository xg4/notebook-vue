<template>
  <header>
    <div class="xg-header" :class="{ 'is-fixed': fixed }">
      <div class="xg-header-button is-left">
        <mt-button @click="back" icon="back">返回</mt-button>
      </div>
      <h1 class="xg-header-title" v-text="title"></h1>
      <div class="xg-header-button is-right">
        <mt-button icon="more"></mt-button>
      </div>
    </div>
    <div class="xg-header is-placeholder" v-if="fixed"></div>
  </header>
</template>

<script>
export default {
  name: "xg-header",
  props: {
    fixed: Boolean,
    title: String
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>

<style scoped>
.xg-header {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #26a2ff;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 14px;
  height: 40px;
  line-height: 1;
  padding: 0 10px;
  position: relative;
  text-align: center;
  white-space: nowrap;
}
.xg-header.is-placeholder {
  visibility: hidden;
  position: static;
}
.xg-header .mint-button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
}
.xg-header .mint-button::after {
  content: none;
}
.xg-header.is-fixed {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.xg-header-button {
  -webkit-box-flex: 0.5;
  -ms-flex: 0.5;
  flex: 0.5;
}
.xg-header-button > a {
  color: inherit;
}
.xg-header-button.is-right {
  text-align: right;
}
.xg-header-button.is-left {
  text-align: left;
}
.xg-header-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  font-weight: 400;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
