<template>
  <span @click.stop="handleCollect">
    <transition mode="out-in" enter-active-class="animated tada">
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
  data() {
    return {
      loading: false
    };
  },
  watch: {
    loading(newVal) {
      if (newVal) {
        // Indicator 提示
        this.$indicator.open({
          spinnerType: "fading-circle"
        });
      } else {
        this.$indicator.close();
      }
    }
  },
  methods: {
    handleCollect() {
      this.loading = true;
      this.$store
        .dispatch(COLLECT_NOTE, this.id)
        .then(res => {
          // toast提示
          if (res) {
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
        })
        .finally(() => {
          this.loading = false;
          this.$indicator.close();
        });
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 20px;
  display: block;
}
.icon-collection {
  color: rgb(198, 209, 222);
}
.icon-collection_fill {
  color: rgb(247, 186, 42);
}
</style>
