<template>
  <div>
    <mt-navbar v-model="selected">
        <mt-tab-item id="all">全部</mt-tab-item>
        <mt-tab-item id="finish">已完成</mt-tab-item>
        <mt-tab-item id="unfinish">未完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="all">
            <xg-empty v-if="reverseNotes.length===0"></xg-empty>
            <xg-note-card v-else v-for="(note,index) in reverseNotes" 
            :key="index" 
            :title="note.title"
            :content="note.content"
            :tag="note.tag"
            :date="note.date"
            v-model="note.finish">                               
            </xg-note-card>
        </mt-tab-container-item>
        <mt-tab-container-item id="finish">
          <xg-empty v-if="reverseNotes.filter(v=>v.finish).length===0"></xg-empty>          
          <xg-note-card v-else v-for="(note,index) in reverseNotes.filter(v=>v.finish)" 
          :key="index" 
          :title="note.title"
          :content="note.content"
          :tag="note.tag"
          :date="note.date"
          v-model="note.finish">                             
          </xg-note-card>      
        </mt-tab-container-item>
        <mt-tab-container-item id="unfinish">
            <xg-empty v-if="reverseNotes.filter(v=>!v.finish).length===0"></xg-empty>
            <xg-note-card v-else v-for="(note,index) in reverseNotes.filter(v=>!v.finish)" 
            :key="index" 
            :title="note.title"
            :content="note.content"
            :tag="note.tag"
            :date="note.date"
            v-model="note.finish">                            
            </xg-note-card>
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: "Notes",
  mounted() {
    let notes = localStorage.getItem("notes") || "[]";
    this.notes = JSON.parse(notes);
  },
  data() {
    return {
      selected: "all",
      notes: []
    };
  },
  computed: {
    reverseNotes() {
      let notes = this.notes.map(v => v);
      return notes.reverse();
    }
  },
  watch: {
    notes: {
      handler(newValue) {
        let notes = JSON.stringify(this.notes);
        localStorage.setItem("notes", notes);
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
