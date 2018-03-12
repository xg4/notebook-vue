<template>
  <div class="notes">
    <xg-tab></xg-tab>
    <router-view :notes="notes"></router-view>
  </div>
</template>

<script>
export default {
  name: "Notes",
  mounted() {
    this.getData();
  },
  data() {
    return {
      notes: []
    };
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
