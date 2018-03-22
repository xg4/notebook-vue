import * as types from './types'
import { storage } from '@/utils'

export default {
  async [types.GET_NOTES] ({ commit }) {
    const notes = (await storage.get('notes')) || []
    commit(types.GET_NOTES, notes)
  },
  async [types.GET_TAG_MAP] ({ commit }) {
    const tagMap = await storage.get('tagMap')
    if (!tagMap) {
      return
    }
    commit(types.GET_TAG_MAP, tagMap)
  },
  async [types.UPDATE_TAG_MAP] ({ commit }, newTagMap) {
    try {
      await storage.set('tagMap', newTagMap)
    } catch (err) {
      let err = '存储出错！'
      return Promise.reject(err)
    }
    commit(types.UPDATE_TAG_MAP, newTagMap)
  },
  async [types.FINISH_NOTE] ({ dispatch, commit, state }, noteId) {
    const note = await dispatch(types.GET_NOTE, noteId)
    const savedNote = { ...note }
    try {
      commit(types.FINISH_NOTE, note)
      await dispatch(types.SAVE_NOTES, state.notes)
      return note.finish
    } catch (err) {
      // 保存失败，将状态变回原样
      commit(types.EDIT_NOTE, savedNote)
      return Promise.reject(err)
    }
  },
  async [types.COLLECT_NOTE] ({ dispatch, commit, state }, noteId) {
    const note = await dispatch(types.GET_NOTE, noteId)
    const savedNote = { ...note }
    try {
      commit(types.COLLECT_NOTE, note)
      await dispatch(types.SAVE_NOTES, state.notes)
      return note.collect
    } catch (err) {
      // 保存失败，将状态变回原样
      commit(types.EDIT_NOTE, savedNote)
      return Promise.reject(err)
    }
  },
  async [types.CREATE_NOTE] ({ dispatch, commit, state }, note) {
    commit(types.CREATE_NOTE, note)
    try {
      await dispatch(types.SAVE_NOTES, state.notes)
    } catch (err) {
      // 保存失败，将状态变回原样
      commit(types.REMOVE_NOTE, note.id)
      return Promise.reject(err)
    }
  },
  async [types.REMOVE_NOTES] ({ dispatch, commit, state }) {
    const savedNotes = [...state.notes]
    commit(types.REMOVE_NOTES)
    try {
      await dispatch(types.SAVE_NOTES, state.notes)
    } catch (err) {
      commit(types.RESTORE_NOTES, savedNotes)
      return Promise.reject(err)
    }
  },
  async [types.REMOVE_FINISH_NOTES] ({ dispatch, commit, state }) {
    const savedNotes = [...state.notes]
    commit(types.REMOVE_FINISH_NOTES)
    try {
      await dispatch(types.SAVE_NOTES, state.notes)
    } catch (err) {
      commit(types.RESTORE_NOTES, savedNotes)
      return Promise.reject(err)
    }
  },
  async [types.REMOVE_NOTE] ({ dispatch, commit, state }, noteId) {
    const savedNotes = [...state.notes]
    commit(types.REMOVE_NOTE, noteId)
    try {
      await dispatch(types.SAVE_NOTES, state.notes)
    } catch (err) {
      commit(types.RESTORE_NOTES, savedNotes)
      return Promise.reject(err)
    }
  },
  async [types.GET_NOTE] ({ commit, state }, noteId) {
    let note = await state.notes.find(note => note.id === noteId)
    return note
  },
  async [types.EDIT_NOTE] ({ dispatch, commit, state }, newNote) {
    const note = await dispatch(types.GET_NOTE, newNote.id)
    const savedNote = { ...note }
    commit(types.EDIT_NOTE, newNote)
    try {
      await dispatch(types.SAVE_NOTES, state.notes)
    } catch (err) {
      commit(types.EDIT_NOTE, savedNote)
      return Promise.reject(err)
    }
  },
  async [types.SAVE_NOTES] ({ commit }, notes) {
    await storage.set('notes', notes)
  },
  async [types.UPLOAD_NOTES] ({ commit, state, dispatch }, notes) {
    commit(types.UPLOAD_NOTES, notes)
    await dispatch(types.SAVE_NOTES, state.notes)
  }
}
