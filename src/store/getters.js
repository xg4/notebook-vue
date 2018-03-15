export default {
    // TODO：排序工具函数
    getNoteById(state) {
        return state.notes.find(note => note.id == state.note_id)
    },
    allNotes(state) {
        return state.notes;
    },
    finishNotes(state) {
        return state.notes.filter(note => note.finish)
    },
    unfinishNotes(state) {
        return state.notes.filter(note => !note.finish)
    },
    collectNotes(state) {
        return state.notes.filter(note => note.collect)
    }
}