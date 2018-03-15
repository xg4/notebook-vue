<template>
  <div v-if="note" class="note">
    <div class="note-title">
      <h2>{{ note.title }}</h2>
      <ul class="note-info">
        <li class="note-finish note-info-item">
          <xg-finish-btn :finish="note.finish" :id="id"></xg-finish-btn>
          <template v-if="note.finish">已完成</template>
          <template v-else>未完成</template>
        </li>
        <li class="note-tag note-info-item">
          <xg-tag-icon :type="note.tag"></xg-tag-icon>
        </li>
        <li class="note-collect note-info-item">
          <xg-collect-btn :collect="note.collect" :id="id"></xg-collect-btn>
        </li>
      </ul>
    </div>
    <div class="note-content">
      <p>{{ note.content }}</p>
    </div>
    <div class="note-date">
      <template v-if="!note.update_at">
        发布于： {{ note.create_at | formatDate() }}
      </template>
      <template v-else>
        编辑于： {{ note.update_at | formatDate() }}
      </template>
    </div>
  </div>
  <xg-404 v-else></xg-404>
</template>

<script>
import { GET_NOTE } from "../store/types";
import { formatDate } from "@/utils";
import XgTagIcon from "@/components/TagIcon";
import XgCollectBtn from "@/components/CollectBtn";
import XgFinishBtn from "@/components/FinishBtn";
import Xg404 from "@/components/404";

export default {
  name: "xg-note",
  beforeMount() {
    this.id = this.$route.params.id;
    this.getNoteById();
  },
  data() {
    return {
      id: "",
      note: ""
    };
  },
  methods: {
    getNoteById() {
      this.$store
        .dispatch(GET_NOTE, this.id)
        .then(() => {
          this.note = this.$store.getters.getNoteById;
        })
        .catch(() => {
          this.$toast({
            message: "获取数据失败"
          });
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
  margin: 0 10px;
  font-size: 1em;
  line-height: 2em;
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  color: #34495e;
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
}

.note-title .note-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
  color: #999;
  font-size: 14px;
}

.note-title .note-info .note-info-item {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.note-content p {
  margin: 1.2em 0;
  position: relative;
  z-index: 1;
  word-spacing: 0.05em;
}

.note-date {
  color: #999;
  font-size: 14px;
  text-align: right;
}
</style>
