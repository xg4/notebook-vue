import { bubbleSortByTime } from '@/utils'

export default {
    allNotes(state) {
        let notes = state.notes
        return bubbleSortByTime(notes, 'update_at', state.sort_by_time);
    },
    finishNotes(state) {
        let notes = state.notes.filter(note => note.finish)
        return bubbleSortByTime(notes, 'update_at', state.sort_by_time);
    },
    unfinishNotes(state) {
        let notes = state.notes.filter(note => !note.finish)
        return bubbleSortByTime(notes, 'update_at', state.sort_by_time);
    },
    collectNotes(state) {
        let notes = state.notes.filter(note => note.collect)
        return bubbleSortByTime(notes, 'update_at', state.sort_by_time);
    },
}