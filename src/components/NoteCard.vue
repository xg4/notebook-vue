<template>
  <transition
  leave-active-class="animated bounceOutLeft">
    <div class="xg-note-card">
      <div class="xg-note-card-icon">
          <i class="icon icon-tag" :class="_tagClass"></i>
      </div>
      <div class="xg-note-card-btn">
        <xg-checkbox v-model="isFinish"></xg-checkbox>
      </div>
      <div class="xg-note-card-header">
        <div class="xg-note-card-title">{{ title }}</div>
        <div class="xg-note-card-date">{{ date | formatDate(true)}}</div>
      </div>
      <div class="xg-note-card-content">
        {{ content }}
      </div>
    </div>
  </transition>
</template>

<script>
const TYPE_CLASSES_MAP = {
  primary: "primary",
  success: "success",
  info: "info",
  warning: "warning",
  danger: "danger"
};
export default {
  name: "xg-note-card",
  mounted() {},
  props: {
    title: {
      type: String,
      default: "标题"
    },
    content: {
      type: String,
      default: "内容"
    },
    date: {
      type: [Date, Number, String],
      default: Date.now
    },
    tag: String,
    value: Boolean
  },
  data() {
    return {
      isFinish: this.value
    };
  },
  computed: {
    _tagClass() {
      return TYPE_CLASSES_MAP[this.tag] || "primary";
    },
    _formatDate() {
      return 1;
    }
  },
  watch: {
    value(val) {
      this.isFinish = val;
    },
    isFinish(newValue) {
      // note 改变后 toast 提醒
      if (newValue) {
        this.$toast({
          message: "已完成"
        });
      } else {
        this.$toast({
          message: "未完成"
        });
      }
      setTimeout(() => this.$emit("input", newValue), 100);
      console.log(`${this.title}:${newValue}`);
    }
  }
};
</script>

<style scoped>
.xg-note-card {
  margin: 15px 0;
  border-radius: 8px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  -webkit-box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
    0 2px 4px 0 rgba(232, 237, 250, 0.5);
  color: #303133;
  position: relative;
}
.xg-note-card-btn {
  position: absolute;
  top: 32px;
}
.xg-note-card-icon {
  position: absolute;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  text-align: center;
}

.xg-note-card-icon .icon {
  display: block;
  width: 100%;
  height: 100%;
}

.icon-tag.primary {
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

.xg-note-card-header {
  margin-left: 32px;
  padding: 10px 5px;
  border-bottom: 1px solid #ebeef5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: bolder;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
}

.xg-note-card-title {
  width: 60%;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xg-note-card-date {
  width: 40%;
  text-align: right;
  font-size: 0.2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xg-note-card-content {
  margin-left: 32px;
  padding: 10px 5px;
  height: 22px;
  color: rgb(171, 171, 171);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
