<template>
  <footer v-if="showNavbar">
    <nav class="xg-navbar"
         :class="{'is-fixed':fixed}">
      <router-link class="xg-navbar-item"
                   to="/notes">
        <div class="xg-navbar-item-icon">
          <i class="icon icon-notebook"></i>
        </div>
        <div class="xg-navbar-item-label">
          记事本
        </div>
      </router-link>
      <router-link class="xg-navbar-item"
                   to="/create/note">
        <div class="xg-navbar-item-icon">
          <i class="icon icon-create"></i>
        </div>
        <div class="xg-navbar-item-label">
          新建
        </div>
      </router-link>
      <router-link class="xg-navbar-item"
                   to="/collection">
        <div class="xg-navbar-item-icon">
          <i class="icon icon-collect"></i>
        </div>
        <div class="xg-navbar-item-label">
          收藏
        </div>
      </router-link>
      <router-link class="xg-navbar-item"
                   to="/profile">
        <div class="xg-navbar-item-icon">
          <i class="icon icon-user"></i>
        </div>
        <div class="xg-navbar-item-label">
          我
        </div>
      </router-link>
    </nav>
    <div class="xg-navbar is-placeholder"
         v-if="fixed"></div>
  </footer>
</template>

<script>
export default {
  name: 'XgNavbar',
  props: {
    fixed: Boolean
  },
  computed: {
    showNavbar () {
      return this.$route.meta.showNavbar
    }
  }
}
</script>

<style scoped>
.xg-navbar {
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
.xg-navbar.is-placeholder {
  visibility: hidden;
  position: static;
}
.xg-navbar.is-fixed {
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.xg-navbar-item {
  display: block;
  padding: 7px 0;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-decoration: none;
  color: #000;
}
.xg-navbar-item.router-link-active {
  color: #26a2ff;
}
.xg-navbar-item-icon {
  width: 24px;
  height: 24px;
  margin: 0 auto 5px;
}
.xg-navbar-item-icon:empty {
  display: none;
}
.xg-navbar-item-icon > * {
  display: block;
  width: 100%;
  height: 100%;
}
.xg-navbar-item-label {
  color: inherit;
  font-size: 12px;
  line-height: 1;
}
.icon {
  font-size: 20px;
}
</style>
