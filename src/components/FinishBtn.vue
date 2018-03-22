<template>
  <span @click.stop="handleFinish">
    <transition mode="out-in"
                enter-active-class="animated wobble">
      <i class="icon icon-finish"
         v-if="finish"
         key="true"></i>
      <i class="icon icon-unfinish"
         v-else
         key="false"></i>
    </transition>
  </span>
</template>

<script>
import { FINISH_NOTE } from '../store/types'

export default {
  name: 'XgFinishBtn',
  props: ['finish', 'id'],
  data () {
    return {
      loading: false
    }
  },
  watch: {
    loading (newVal) {
      if (newVal) {
        // Indicator 提示
        this.$indicator.open({
          spinnerType: 'fading-circle'
        })
      } else {
        this.$indicator.close()
      }
    }
  },
  methods: {
    handleFinish () {
      this.loading = true
      this.$store
        .dispatch(FINISH_NOTE, this.id)
        .then(res => {
          // toast 提示
          if (res) {
            this.$toast({
              message: '标记完成'
            })
          } else {
            this.$toast({
              message: '标记未完成'
            })
          }
        })
        .catch(() => {
          this.$toast({
            message: '标记失败'
          })
        })
        .finally(() => {
          this.loading = false
          this.$indicator.close()
        })
    }
  }
}
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
