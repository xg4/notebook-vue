<template>
  <div>
    <xg-tab></xg-tab>
    <transition enter-active-class="animated lightSpeedIn">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import XgTab from '@/components/Tab'

export default {
  name: 'XgNotes',
  components: {
    XgTab
  }
}
</script>

<style>

</style>
