<template>
  <div>
    <xg-empty v-if="notesAll.length===0"></xg-empty>
    <xg-note-card v-else v-for="note in notesAll" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
export default {
  name: "NotesAll",
  props: ["notes"],
  computed: {
    notesAll() {
      return this.notes.sort(n => n.finish);
    }
  }
};
</script>

<style>

</style>
