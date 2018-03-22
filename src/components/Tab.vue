<template>
  <div class="xg-tab"
       :class="{ 'is-fixed': fixed }">
    <router-link to="/notes/all"
                 class="xg-tab-item">
      全部
    </router-link>
    <router-link to="/notes/finish"
                 class="xg-tab-item">
      已完成
    </router-link>
    <router-link to="/notes/unfinish"
                 class="xg-tab-item">
      未完成
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'xg-tab',
  props: ['fixed']
}
</script>

<style scoped>
.xg-tab {
  background-color: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  text-align: center;
  border-bottom: 3px solid #eee;
}
.xg-tab .xg-tab-item {
  padding: 17px 0;
  font-size: 15px;
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
.xg-tab .xg-tab-item:last-child {
  border-right: 0;
}
.xg-tab .xg-tab-item.router-link-active {
  border-bottom: 3px solid #26a2ff;
  color: #26a2ff;
  margin-bottom: -3px;
}
.xg-tab.is-fixed {
  top: 0;
  right: 0;
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
}
</style>
