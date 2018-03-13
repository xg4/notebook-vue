<template>
    <div class="collect-btn" @click.stop="handleCollect">
        <transition mode="out-in" :duration="350" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
            <i class="icon icon-collection_fill" v-if="currentValue" key="collection_fill"></i>
            <i class="icon icon-collection" v-else key="collection"></i>
        </transition>
    </div>
</template>

<script>
export default {
  name: "xg-collect-btn",
  props: ["value"],
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    currentValue(val) {
      // 通知父组件collect改变
      this.$emit("input", val);
      // toast提示
      if (val) {
        this.$toast({
          message: "收藏成功"
        });
      } else {
        this.$toast({
          message: "取消收藏"
        });
      }
    }
  },
  methods: {
    handleCollect() {
      this.currentValue = !this.currentValue;
    }
  }
};
</script>

<style scoped>
.collect-btn {
  margin: 0 auto;
  width: 50%;
  text-align: center;
}
.icon-collection {
  color: rgb(198, 209, 222);
  /* color: #000; */
}
.icon-collection_fill {
  color: rgb(247, 186, 42);
}
</style>
