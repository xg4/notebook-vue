<template>
  <div>
    <xg-empty v-if="notesCollect.length===0"></xg-empty>
    <xg-note-card v-else v-for="note in notesCollect" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
import { local } from "@/utils";
import XgNoteCard from "@/components/NoteCard";
import XgEmpty from "@/components/Empty";

export default {
  name: "Collect",
  mounted() {
    this.getData();
  },
  data() {
    return {
      notes: []
    };
  },
  computed: {
    notesCollect() {
      return this.notes.filter(n => n.collect);
    }
  },
  methods: {
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
    XgNoteCard,
    XgEmpty
  }
};
</script>

<style>

</style>
