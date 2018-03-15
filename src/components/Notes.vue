<template>
  <div>
    <xg-tab></xg-tab>
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import XgTab from "@/components/Tab";

export default {
  name: "Notes",
  components: {
    XgTab
  }
};
</script>

<style>

</style>
