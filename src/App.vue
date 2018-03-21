<template>
  <div id="app">
    <xg-header fixed="fixed" :title="title"></xg-header>
    <section>
      <keep-alive :include="keepAlive">
        <router-view></router-view>
      </keep-alive>
    </section>
    <xg-navbar fixed="fixed"></xg-navbar>
  </div>
</template>

<script>
import * as types from "./store/types";
import XgHeader from "@/components/Header";
import XgNavbar from "@/components/Navbar";

export default {
  name: "App",
  beforeMount() {
    this.title = this.$route.meta.title;
    this.getNotes();
    this.getTagMap();
  },
  methods: {
    getNotes() {
      // 获取 notes 数据
      this.loading = true;
      this.$store
        .dispatch(types.GET_NOTES)
        .then(() => {})
        .catch(() => {
          this.$toast({
            message: "获取数据失败"
          });
        })
        .finally(() => {
          this.loading = false;
          this.$indicator.close();
        });
    },
    getTagMap() {
      this.$store.dispatch(types.GET_TAG_MAP);
    }
  },
  data() {
    return {
      title: "",
      loading: "",
      keepAlive: []
    };
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
      if (to.meta.keepAlive) {
        if (this.keepAlive.indexOf(to.meta.keepAlive) != -1) {
          return;
        }
        this.keepAlive.push(to.meta.keepAlive);
      }
    },
    loading(newVal) {
      if (newVal) {
        this.$indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
        });
      } else {
        this.$indicator.close();
      }
    }
  },
  components: {
    XgHeader,
    XgNavbar
  }
};
</script>

<style>
body {
  margin: 0;
}
</style>
