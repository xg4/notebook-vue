<template>
  <div id="app">
    <xg-header fixed="fixed" :title="title"></xg-header>
    <section>
      <keep-alive :exclude="['xg-note','xg-create-note','xg-edit-note']">
        <router-view></router-view>
      </keep-alive>
    </section>
    <xg-navbar fixed="fixed"></xg-navbar>
  </div>
</template>

<script>
import { GET_NOTES } from "./store/types";
import XgHeader from "@/components/Header";
import XgNavbar from "@/components/Navbar";

export default {
  name: "App",
  beforeMount() {
    this.title = this.$route.meta.title;
    this.getNotes();
  },
  methods: {
    getNotes() {
      // 获取 notes 数据
      this.loading = true;
      this.$store
        .dispatch(GET_NOTES)
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
    }
  },
  data() {
    return {
      title: "",
      loading: ""
    };
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
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
