<template>
  <div id="app">
    <xg-header fixed="fixed" :title="title"></xg-header>
    <section>
      <keep-alive :exclude="['xg-note','xg-create-note']">
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
    // 获取 notes 数据
    this.$store
      .dispatch(GET_NOTES)
      .then(() => {})
      .catch(() => {
        this.$toast({
          message: "获取数据失败"
        });
      });
  },
  mounted() {
    this.title = this.$route.meta.title;
  },
  data() {
    return {
      title: ""
    };
  },
  watch: {
    $route(to) {
      this.title = to.meta.title;
    }
  },
  components: {
    XgHeader,
    XgNavbar
  }
};
</script>

<style>

</style>
