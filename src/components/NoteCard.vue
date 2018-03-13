<template>
  <transition leave-active-class="animated bounceOutLeft">
    <div class="xg-note-card" @click="handleTo">
      <div class="xg-note-card-icon">
        <i class="icon icon-tag" :class="note.tag"></i>
      </div>
      <div class="xg-note-card-finish">
        <xg-finish-btn v-model="note.finish"></xg-finish-btn>
      </div>
      <div class="xg-note-card-header">
        <div class="xg-note-card-title">{{ note.title }}</div>
        <div class="xg-note-card-date">{{ note.date | formatDate(true)}}</div>
      </div>
      <div class="xg-note-card-body">
        <div class="xg-note-card-content">
          {{ note.content }}
        </div>
        <div class="xg-note-card-collect">
          <xg-collect-btn v-model="note.collect"></xg-collect-btn>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import XgFinishBtn from "@/components/FinishBtn";
import XgCollectBtn from "@/components/CollectBtn";
import { formatDate } from "@/utils";

export default {
  name: "xg-note-card",
  props: ["note"],
  methods: {
    handleTo() {
      let id = this.note.id || "";
      this.$router.push({ path: `/note/${id}` });
    }
  },
  components: {
    XgFinishBtn,
    XgCollectBtn
  },
  filters: {
    // date filter
    formatDate
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
.xg-note-card-finish {
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

.xg-note-card-body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  margin-left: 32px;
  padding: 10px 5px;
  height: 22px;
}
.xg-note-card-content {
  width: 80%;
  color: rgb(171, 171, 171);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.xg-note-card-collect {
  width: 20%;
}
</style>
