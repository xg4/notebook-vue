import * as types from './types'
import { local } from '@/utils'

export default {
    [types.GET_NOTES](state, notes) {
        state.notes = notes;
    },
    [types.FINISH_NOTE](state, note_id) {
        let note = state.notes.find(note => note.id == note_id)
        note.finish = !note.finish
    },
    [types.COLLECT_NOTE](state, note_id) {
        let note = state.notes.find(note => note.id == note_id)
        note.collect = !note.collect
    },
    [types.CREATE_NOTE](state, note) {
        state.notes.push(note)
    },
    [types.GET_NOTE](state, note_id) {
        state.note_id = note_id
    },
    [types.RESTORE_NOTES](state, notes) {
        state.notes = notes
    },
}