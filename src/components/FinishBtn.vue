<template>
  <span @click.stop="handleFinish">
    <transition enter-active-class="animated wobble">
      <i class="icon icon-finish" v-if="finish" key="true"></i>
      <i class="icon icon-unfinish" v-else key="false"></i>
    </transition>
  </span>
</template>

<script>
import { FINISH_NOTE } from "../store/types";

export default {
  name: "xg-finish-btn",
  props: ["finish", "id"],
  methods: {
    handleFinish() {
      this.$store
        .dispatch(FINISH_NOTE, this.id)
        .then(() => {
          // toast 提示
          if (!this.finish) {
            this.$toast({
              message: "标记完成"
            });
          } else {
            this.$toast({
              message: "标记未完成"
            });
          }
        })
        .catch(() => {
          this.$toast({
            message: "标记失败"
          });
        });
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 25px;
  color: #409eff;
  display: block;
}

.icon-unfinish {
  color: rgb(198, 209, 222);
}
</style>
