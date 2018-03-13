<template>
  <div>
    <xg-empty v-if="notesFinish.length===0"></xg-empty>
    <xg-note-card v-else v-for="note in notesFinish" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
import XgNoteCard from "@/components/NoteCard";
import XgEmpty from "@/components/Empty";

export default {
  name: "NotesFinish",
  props: ["notes"],
  computed: {
    notesFinish() {
      return this.notes.filter(n => n.finish);
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
