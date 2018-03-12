<template>
  <div>
    <xg-empty v-if="notes.length===0"></xg-empty>
    <xg-note-card
    v-else
    v-for="note in notes"
    :key="note.id"
    :note="note">
    </xg-note-card>
  </div>
</template>

<script>
export default {
  name: "NotesAll",
  props: ["notes"]
};
</script>

<style>

</style>
