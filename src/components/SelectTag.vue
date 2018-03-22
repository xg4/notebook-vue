<template>
  <div class="xg-select-tag">
    <xg-tag v-for="(tagName,tagValue) in tagMap"
            :key="tagValue"
            :type="tagValue"
            :hit="value!==tagValue"
            @click.native="handleClick(tagValue)">
      <i class="icon icon-tag"></i>
      <span>{{tagName}}</span>
    </xg-tag>
  </div>
</template>

<script>
import XgTag from './Tag'

export default {
  name: 'XgSelectTag',
  data () {
    return {
      currentVal: ''
    }
  },
  props: ['tagMap', 'value'],
  watch: {
    value (newVal) {
      this.currentVal = newVal
    },
    currentVal (newVal) {
      this.$emit('input', newVal)
    }
  },
  methods: {
    handleClick (tagValue) {
      this.currentVal = tagValue
    }
  },
  components: {
    XgTag
  }
}
</script>

<style scoped>
.xg-select-tag {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
}
.xg-select-tag > span {
  margin: 10px;
}
</style>
