import * as types from './types'
import { mergeNotes } from '../utils'

export default {
  [types.GET_NOTES] (state, notes) {
    state.notes = notes
  },
  [types.FINISH_NOTE] (state, note) {
    note.finish = !note.finish
  },
  [types.COLLECT_NOTE] (state, note) {
    note.collect = !note.collect
  },
  [types.CREATE_NOTE] (state, note) {
    state.notes.unshift(note)
  },
  [types.REMOVE_NOTE] (state, noteId) {
    state.notes.find((note, index, notes) => {
      if (note.id === noteId) {
        notes.splice(index, 1)
        return true
      }
    })
  },
  [types.REMOVE_NOTES] (state) {
    state.notes = []
  },
  [types.RESTORE_NOTES] (state, notes) {
    state.notes = notes
  },
  [types.REMOVE_FINISH_NOTES] (state) {
    state.notes = state.notes.filter(note => !note.finish)
  },
  [types.SORT_BY_TIME] (state) {
    state.sort_by_time = !state.sort_by_time
  },
  [types.EDIT_NOTE] (state, newNote) {
    state.notes.find((note, index, notes) => {
      if (note.id === newNote.id) {
        notes.splice(index, 1, newNote)
        return true
      }
    })
  },
  [types.UPLOAD_NOTES] (state, notes) {
    let newNotes = mergeNotes(state.notes, notes)
    state.notes = newNotes
  },
  [types.GET_TAG_MAP] (state, tagMap) {
    state.tagMap = tagMap
  },
  [types.UPDATE_TAG_MAP] (state, newTagMap) {
    state.tagMap = newTagMap
  }
}
