<template>
  <div class="xg-empty">
    <div>
      <i class="icon icon-empty"></i>
    </div>
    <div>
      <slot name="content">
        空
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "xg-empty"
};
</script>

<style scoped>
.icon-empty {
  font-size: 64px;
}
.xg-empty {
  margin: 30px 0;
  text-align: center;
  color: #999;
}
</style>
