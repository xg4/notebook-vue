<template>
  <div v-if="note" class="note">
    <div class="note-title">
      <h2>{{ note.title }}</h2>
      <ul class="note-info">
        <li class="note-finish note-info-item">
          <xg-finish-btn v-model="note.finish"></xg-finish-btn>
          <template v-if="note.finish">已完成</template>
          <template v-else>未完成</template>
        </li>
        <li class="note-tag note-info-item">
          <xg-tag-icon :type="note.tag"></xg-tag-icon>
        </li>
        <li class="note-collect note-info-item">
          <xg-collect-btn v-model="note.collect"></xg-collect-btn>
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
  <xg-empty v-else>
    <div>
      <i class="icon icon-404" style="font-size:128px"></i>
    </div>
    <div>
      没有找到此记录，请查看ID是否有误！
    </div>
  </xg-empty>
</template>

<script>
import XgTagIcon from "@/components/TagIcon";
import XgCollectBtn from "@/components/CollectBtn";
import XgFinishBtn from "@/components/FinishBtn";
import XgEmpty from "@/components/Empty";
import { local, formatDate } from "@/utils";

export default {
  name: "xg-note",
  mounted() {
    let id = this.$route.params.id;
    this.getData();
    this.getNoteById(id);
  },
  data() {
    return {
      notes: [],
      note: null
    };
  },
  methods: {
    getNoteById(id) {
      let index;
      this.notes.some((n, i) => {
        if (n.id == id) {
          index = i;
          return true;
        }
        return false;
      });
      this.note = index >= 0 ? this.notes[index] : null;
    },
    getData() {
      this.notes = local.get("notes");
    },
    saveData(newNotes) {
      local.set("notes", newNotes);
    }
  },
  watch: {
    notes: {
      handler(newNotes) {
        this.saveData(newNotes);
      },
      deep: true
    }
  },
  components: {
    XgTagIcon,
    XgCollectBtn,
    XgFinishBtn,
    XgEmpty
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
