<template>
  <div>
    <xg-empty v-if=" notesUnfinish.length === 0 "></xg-empty>
    <xg-note-card v-else v-for="note in notesUnfinish" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
import XgNoteCard from "@/components/NoteCard";
import XgEmpty from "@/components/Empty";

export default {
  name: "NotesUnfinish",
  props: ["notes"],
  computed: {
    notesUnfinish() {
      return this.notes.filter(n => !n.finish);
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
