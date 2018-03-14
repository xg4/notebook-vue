<template>
  <div class="xg-empty">
    <slot>
      <div>
        <i class="icon icon-empty"></i>
      </div>
      <div>
        空
      </div>
    </slot>
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
