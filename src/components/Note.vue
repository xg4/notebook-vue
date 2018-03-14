<template>
  <div v-if="note">
    <h2>{{this.note.title}}</h2>
  </div>
  <div v-else>
    没有此记录,ID是否有误！
  </div>
</template>

<script>
import { local } from "@/utils";

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
  }
};
</script>

<style scoped>
h2 {
  margin: 45px 0 0.8em;
  padding-bottom: 0.7em;
  border-bottom: 1px solid #ddd;
  pointer-events: none;
  text-align: center;
  font-weight: 600;
  color: #2c3e50;
}
</style>
