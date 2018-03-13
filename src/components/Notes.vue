<template>
  <div>
    <xg-tab></xg-tab>
    <transition mode="out-in" :duration="200" enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
      <router-view :notes="notes"></router-view>
    </transition>
  </div>
</template>

<script>
import { local } from "@/utils";
import XgTab from "@/components/Tab";

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
    XgTab
  }
};
</script>

<style>

</style>
