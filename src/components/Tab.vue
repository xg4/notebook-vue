<template>
  <footer>
    <div class="xg-tab" :class="{'is-fixed':fixed}">
        <router-link class="xg-tab-item" to="/book">
          <div class="xg-tab-item-icon">
            <i class="icon icon-book"></i>
          </div>
          <div class="xg-tab-item-label">
            记事本
          </div>
        </router-link>
        <router-link class="xg-tab-item" to="/new">
          <div class="xg-tab-item-icon">
            <i class="icon icon-new"></i>
          </div>
          <div class="xg-tab-item-label">
            新建
          </div>
        </router-link>
        <router-link class="xg-tab-item" to="/collect">
          <div class="xg-tab-item-icon">
            <i class="icon icon-collect"></i>
          </div>
          <div class="xg-tab-item-label">
            收藏
          </div>
        </router-link>
        <router-link class="xg-tab-item" to="/me">
          <div class="xg-tab-item-icon">
            <i class="icon icon-user"></i>
          </div>
          <div class="xg-tab-item-label">
            我
          </div>
        </router-link>
    </div>
    <div class="xg-tab is-placeholder" v-if="fixed">
      
    </div>
  </footer>
</template>

<script>
export default {
  name: "xg-tab",
  props: {
    fixed: Boolean
  }
};
</script>

<style scoped>
.xg-tab {
  height: 55px;
  background-image: -webkit-linear-gradient(
    top,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 50%
  );
  background-image: linear-gradient(
    180deg,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 50%
  );
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: top left;
  position: relative;
  background-color: #fafafa;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  text-align: center;
  border-top: 1px solid #d9d9d9;
}
.xg-tab.is-placeholder {
  visibility: hidden;
  position: static;
}
.xg-tab.is-fixed {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.xg-tab-item {
  display: block;
  padding: 7px 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-decoration: none;
  color: #000;
}
.xg-tab-item.router-link-active {
  color: #26a2ff;
}
.xg-tab-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.xg-tab-item-icon:empty {
  display: none;
}
.xg-tab-item-icon > * {
  display: block;
  width: 100%;
  height: 100%;
}
.xg-tab-item-label {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
</style>
