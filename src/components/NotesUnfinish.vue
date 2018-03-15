<template>
  <div>
    <xg-empty v-if=" notes.length === 0 "></xg-empty>
    <xg-note-card v-else v-for="note in notes" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import XgNoteCard from "@/components/NoteCard";
import XgEmpty from "@/components/Empty";

export default {
  name: "NotesUnfinish",
  computed: {
    ...mapGetters({
      notes: "unfinishNotes"
    })
  },
  components: {
    XgNoteCard,
    XgEmpty
  }
};
</script>

<style>

</style>
