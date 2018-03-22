<template>
  <i class="icon icon-tag"
     :class="type">
  </i>
</template>

<script>
export default {
  name: 'xg-tag-icon',
  props: ['type']
}
</script>

<style scoped>
.icon {
  font-size: 20px;
}
.icon-tag {
  color: #409eff;
}

.icon-tag.success {
  color: #67c23a;
}

.icon-tag.info {
  color: #909399;
}

.icon-tag.warning {
  color: #e6a23c;
}

.icon-tag.danger {
  color: #f56c6c;
}
</style>
