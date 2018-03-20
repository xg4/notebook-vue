<template>
  <div v-if="!loading" class="note">
    <template v-if="note" >
      <div class="note-title">
        <h2>{{ note.title }}</h2>
        <ul class="note-info">
          <li class="note-finish note-info-item">
            <xg-finish-btn :finish="note.finish" :id="note.id"></xg-finish-btn>
            <span v-if="note.finish">已完成</span>
            <span v-else>未完成</span>
          </li>
          <li class="note-tag note-info-item">
            <xg-tag-icon :type="note.tag"></xg-tag-icon>
          </li>
          <li class="note-collect note-info-item">
            <xg-collect-btn :collect="note.collect" :id="note.id"></xg-collect-btn>
            <span v-if="note.collect">已收藏</span>
            <span v-else>未收藏</span>
          </li>
        </ul>
      </div>
      <div class="note-content">
        <p>{{ note.content }}</p>
      </div>
      <div class="note-date">
        编辑于： {{ note.update_at | formatDate() }}
      </div>
    </template>
    <xg-404 v-else></xg-404>
  </div>
</template>

<script>
import * as types from "../store/types";
import { formatDate } from "@/utils";
import XgTagIcon from "@/components/TagIcon";
import XgCollectBtn from "@/components/CollectBtn";
import XgFinishBtn from "@/components/FinishBtn";
import Xg404 from "@/components/404";

export default {
  name: "xg-note",
  beforeMount() {
    this.getNote();
  },
  data() {
    return {
      note: "",
      loading: ""
    };
  },
  watch: {
    loading(newVal) {
      if (newVal) {
        // Indicator 提示
        this.$indicator.open({
          spinnerType: "fading-circle"
        });
      } else {
        this.$indicator.close();
      }
    }
  },
  methods: {
    getNote() {
      this.loading = true;
      this.$store
        .dispatch(types.GET_NOTE, this.$route.params.id)
        .then(note => {
          this.note = note;
        })
        .catch(() => {
          this.$toast({ message: "获取数据失败" });
        })
        .finally(() => {
          this.loading = false;
          this.$indicator.close();
        });
    }
  },
  components: {
    XgTagIcon,
    XgCollectBtn,
    XgFinishBtn,
    Xg404
  },
  filters: {
    // date filter
    formatDate
  }
};
</script>

<style scoped>
.note {
  padding: 10px;
  font-size: 1em;
  line-height: 2em;
  color: #34495e;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.note-title {
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.7em;
  text-align: center;
}

.note-title h2 {
  font-size: 1.5em;
  line-height: 1.5em;
  margin: 25px 0 0.8em;
  font-weight: 600;
  color: #2c3e50;
  word-wrap: break-word;
  word-break: normal;
}

.note-title .note-info {
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  color: #999;
  font-size: 14px;
}

.note-title .note-info .note-info-item {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.note-info-item > span:last-child {
  margin-left: 10px;
}

.note-content p {
  margin: 1.2em 0;
  position: relative;
  z-index: 1;
  word-spacing: 0.05em;
  word-wrap: break-word;
  word-break: normal;
}

.note-date {
  color: #999;
  font-size: 14px;
  text-align: right;
}
</style>
