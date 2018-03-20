<template>
    <div class="xg-user-profile-item">
        <aside class="item-icon">
            <slot name="icon"></slot>
        </aside>
        <div class="item-info">
            <slot></slot>
            <span class="item-info-icon">
                <span class="item-info-content">
                    <slot name="content"></slot>
                </span>
                <span>
                    <i class="icon icon-arrow-right"></i>
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
  name: "xg-user-profile-item"
};
</script>

<style scoped>
.xg-user-profile-item {
  display: flex;
  align-items: center;
  margin: 10px auto;
  padding-left: 18px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  background: #fff;
  font-size: 15px;
  color: #333;
}
.xg-user-profile-item .item-icon {
  margin-right: 8px;
}
.xg-user-profile-item .item-icon .icon {
  font-size: 22px;
}
.xg-user-profile-item .item-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 8px 10px 8px;
}
.item-info-icon {
  display: flex;
}
.item-info-icon .icon {
  color: #bbb;
}
.item-info-icon .item-info-content {
  text-align: right;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
