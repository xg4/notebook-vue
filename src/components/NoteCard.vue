<template>
  <transition leave-active-class="animated bounceOutLeft">
    <div class="xg-note-card" @click="handleTo">
      <div class="xg-note-card-tag">
        <xg-tag-icon :type="note.tag"></xg-tag-icon>
      </div>
      <div class="xg-note-card-finish">
        <xg-finish-btn :finish="note.finish" :id="note.id"></xg-finish-btn>
      </div>
      <div class="xg-note-card-header">
        <div class="xg-note-card-title">{{ note.title }}</div>
        <div class="xg-note-card-date">{{ note.update_at | formatDate(true)}}</div>
      </div>
      <div class="xg-note-card-body">
        <div class="xg-note-card-content">
          {{ note.content }}
        </div>
        <div class="xg-note-card-collect">
          <xg-collect-btn :collect="note.collect" :id="note.id"></xg-collect-btn>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { formatDate } from "@/utils";
import XgFinishBtn from "@/components/FinishBtn";
import XgCollectBtn from "@/components/CollectBtn";
import XgTagIcon from "@/components/TagIcon";

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
    XgCollectBtn,
    XgTagIcon
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
  top: 30px;
  width: 32px;
  height: 32px;
  text-align: center;
}

.xg-note-card-tag {
  position: absolute;
  top: -1px;
  left: 0;
  width: 32px;
  height: 32px;
  text-align: center;
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
  width: 80%;
  height: 22px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.xg-note-card-date {
  width: 20%;
  text-align: center;
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
  text-align: center;
}
</style>
