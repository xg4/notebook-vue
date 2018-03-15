<template>
    <div class="xg-404">
        <div>
            <i class="icon icon-404"></i>
        </div>
        <div>
            <slot name="content">
                没有找到此记录，请查看ID是否有误！
            </slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "xg-404"
};
</script>

<style scoped>
.icon-404 {
  font-size: 128px;
}
.xg-404 {
  margin: 30px 0;
  text-align: center;
  color: #999;
}
</style>
