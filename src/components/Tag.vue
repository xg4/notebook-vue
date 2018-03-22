<template>
  <span class="xg-tag"
        :class="[type ? 'xg-tag-' + type : '',{'is-hit': hit}]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'XgTag',
  props: {
    type: String,
    hit: Boolean
  }
}
</script>

<style scoped>
.xg-tag {
  background-color: rgba(64, 158, 255, 0.1);
  display: inline-block;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  color: #409eff;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid rgba(64, 158, 255, 0.2);
  white-space: nowrap;
  transition: all 0.2s;
}
.xg-tag-primary {
  color: #409eff;
  background-color: rgba(64, 158, 255, 0.1);
  border-color: rgba(64, 158, 255, 0.2);
}
.xg-tag-primary.is-hit {
  border-color: #409eff;
  background: #fff;
}
.xg-tag-info {
  color: #909399;
  background-color: rgba(144, 147, 153, 0.1);
  border-color: rgba(144, 147, 153, 0.2);
}
.xg-tag-info.is-hit {
  border-color: #909399;
  background: #fff;
}
.xg-tag-success {
  background-color: rgba(103, 194, 58, 0.1);
  border-color: rgba(103, 194, 58, 0.2);
  color: #67c23a;
}
.xg-tag-success.is-hit {
  border-color: #67c23a;
  background: #fff;
}
.xg-tag-warning {
  background-color: rgba(230, 162, 60, 0.1);
  border-color: rgba(230, 162, 60, 0.2);
  color: #e6a23c;
}
.xg-tag-warning.is-hit {
  border-color: #e6a23c;
  background: #fff;
}
.xg-tag-danger {
  background-color: rgba(245, 108, 108, 0.1);
  border-color: rgba(245, 108, 108, 0.2);
  color: #f56c6c;
}
.xg-tag-danger.is-hit {
  border-color: #f56c6c;
  background: #fff;
}
</style>
