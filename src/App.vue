<template>
  <div id="app">
    <xg-header fixed="fixed" title="记事本"></xg-header>
    <router-view/>    
    <xg-tab fixed="fixed"></xg-tab>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>

</style>
