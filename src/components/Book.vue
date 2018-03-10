<template>
  <div>
    <mt-navbar v-model="selected">
        <mt-tab-item id="all">全部</mt-tab-item>
        <mt-tab-item id="finish">已完成</mt-tab-item>
        <mt-tab-item id="unfinish">未完成</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
        <mt-tab-container-item id="all">
            <xg-note-card v-for="(note,index) in notes" 
            :key="index" 
            :title="note.title"
            :content="note.content"
            :tagType="note.tagType"
            :date="note.date"
            v-model="note.finish">                               
            </xg-note-card>
        </mt-tab-container-item>
        <mt-tab-container-item id="finish">          
          <xg-note-card v-for="(note,index) in notes.filter(v=>v.finish)" 
          :key="index" 
          :title="note.title"
          :content="note.content"
          :tagType="note.tagType"
          :date="note.date"
          v-model="note.finish">                             
          </xg-note-card>      
        </mt-tab-container-item>
        <mt-tab-container-item id="unfinish">
            <xg-note-card v-for="(note,index) in notes.filter(v=>!v.finish)" 
            :key="index" 
            :title="note.title"
            :content="note.content"
            :tagType="note.tagType"
            :date="note.date"
            v-model="note.finish">                            
            </xg-note-card>
        </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
export default {
  name: "Book",
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
  watch: {
    notes: {
      handler(newValue) {
        console.log(newValue);
      },
      deep: true
    }
  }
};
</script>

<style>

</style>
