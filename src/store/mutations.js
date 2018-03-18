import * as types from './types'
import { stat } from 'fs';

export default {
    [types.GET_NOTES](state, notes) {
        state.notes = notes;
    },
    [types.FINISH_NOTE](state, note) {
        note.finish = !note.finish
    },
    [types.COLLECT_NOTE](state, note) {
        note.collect = !note.collect
    },
    [types.CREATE_NOTE](state, note) {
        state.notes.unshift(note)
    },
    [types.REMOVE_NOTE](state, note_id) {
        state.notes.find((note, index, notes) => {
            if (note.id === note_id) {
                notes.splice(index, 1)
                return true
            }
        })
    },
    [types.REMOVE_NOTES](state) {
        state.notes = []
    },
    [types.RESTORE_NOTES](state, notes) {
        state.notes = notes
    },
    [types.REMOVE_FINISH_NOTES](state) {
        state.notes = state.notes.filter(note => !note.finish)
    },
    [types.SORT_BY_TIME](state) {
        state.sort_by_time = !state.sort_by_time
    },
    [types.EDIT_NOTE](state, newNote) {
        state.notes.find((note, index, notes) => {
            if (note.id == newNote.id) {
                notes.splice(index, 1, newNote)
                return true
            }
        })

    },
}