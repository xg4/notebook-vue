<template>
  <div v-if="note">
    记事详情 {{this.note}}
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
        }
        return n.id == id;
      });
      note = index ? this.notes[index] : null;
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

</style>
