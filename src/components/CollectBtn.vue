<template>
  <span @click.stop="handleCollect">
    <transition mode="out-in" :duration="350" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
      <i class="icon icon-collection_fill" v-if="collect" key="true"></i>
      <i class="icon icon-collection" v-else key="false"></i>
    </transition>
  </span>
</template>

<script>
import { COLLECT_NOTE } from "../store/types";

export default {
  name: "xg-collect-btn",
  props: ["collect", "id"],
  methods: {
    handleCollect() {
      this.$store
        .dispatch(COLLECT_NOTE, this.id)
        .then(() => {
          // toast提示
          if (!this.collect) {
            this.$toast({
              message: "收藏成功"
            });
          } else {
            this.$toast({
              message: "取消收藏"
            });
          }
        })
        .catch(() => {
          this.$toast({
            message: "收藏失败"
          });
        });
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 20px;
}
.icon-collection {
  color: rgb(198, 209, 222);
  /* color: #000; */
}
.icon-collection_fill {
  color: rgb(247, 186, 42);
}
</style>
