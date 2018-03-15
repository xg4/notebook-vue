import * as types from './types'
import { local } from '@/utils'
// 为以后异步获取数据做准备
export default {
    [types.GET_NOTES]({ commit }) {
        return new Promise((resolve, reject) => {
            let notes = local.get('notes')
            commit(types.GET_NOTES, notes)
            resolve()
        })
    },
    [types.FINISH_NOTE]({ dispatch, commit, state }, note_id) {
        return new Promise((resolve, reject) => {
            commit(types.FINISH_NOTE, note_id)
            dispatch('saveNotes', state.notes)
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    // 异步保存失败的话，将状态变回原样
                    commit(types.FINISH_NOTE, note_id)
                    reject()
                })
        })
    },
    [types.COLLECT_NOTE]({ dispatch, commit, state }, note_id) {
        return new Promise((resolve, reject) => {
            commit(types.COLLECT_NOTE, note_id)
            dispatch('saveNotes', state.notes)
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    // 异步保存失败的话，将状态变回原样
                    commit(types.COLLECT_NOTE, note_id)
                    reject()
                })
        })
    },
    [types.CREATE_NOTE]({ dispatch, commit, state }, note) {
        return new Promise((resolve, reject) => {
            // 把当前 notes 备份起来
            const savedNotes = [...state.notes]
            commit(types.CREATE_NOTE, note)
            dispatch('saveNotes', state.notes)
                .then(() => {
                    resolve()
                })
                .catch(() => {
                    commit(types.RESTORE_NOTES, savedNotes)
                    reject()
                })
        })
    },
    [types.GET_NOTE]({ commit }, note_id) {
        return new Promise((resolve, reject) => {
            commit(types.GET_NOTE, note_id)
            resolve()
        })
    },
    saveNotes({ commit }, notes) {
        return new Promise((resolve, reject) => {
            local.set('notes', notes)
            resolve()
        })
    },
}