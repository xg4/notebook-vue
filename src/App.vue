<template>
  <div id="app">
    <xg-header fixed="fixed" :title="title"></xg-header>
    <section>
      <router-view></router-view>
    </section>  
    <xg-navbar fixed="fixed"></xg-navbar>
  </div>
</template>

<script>
export default {
  name: "App",
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
  }
};
</script>

<style>

</style>
