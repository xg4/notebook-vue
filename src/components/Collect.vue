<template>
  <div>
    <xg-empty v-if="notesCollect.length===0"></xg-empty>
    <xg-note-card v-else v-for="note in notesCollect" :key="note.id" :note="note">
    </xg-note-card>
  </div>
</template>

<script>
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
      let notes = localStorage.getItem("notes") || "[]";
      this.notes = JSON.parse(notes);
    },
    saveData(newNotes) {
      let notes = JSON.stringify(newNotes);
      localStorage.setItem("notes", notes);
    }
  },
  watch: {
    notes: {
      handler(newNotes) {
        this.saveData(newNotes);
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
