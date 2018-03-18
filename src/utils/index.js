const uuidv1 = require('uuid/v1');
const moment = require('moment');
moment.locale('zh-cn');

/**
 * @description bubble sort
 * @param {Array} 需要排序的数组
 * @param {String} 按时间排序
 * @param {Boolean} ture 为正序，false 为倒序
 * @returns {Array}
 */
const bubbleSortByTime = (arr, date, type = false) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (type ? new Date(arr[i][date]).getTime() > new Date(arr[j][date]).getTime()
                : new Date(arr[i][date]).getTime() < new Date(arr[j][date]).getTime()) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

/**
 * @description format data
 * @param {Date}
 * @param {Boolean} 是否友好展示
 */
const formatDate = (date = Date.now(), friendly) => {
    if (!friendly) {
        let now = Date.now();
        let old = new Date(date).getTime();
        // 1天=86400000毫秒 没超过1天 友好展示
        friendly = now - old <= 86400000;
    }
    date = moment(date);
    if (friendly) {
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm');
    }
}

/**
 * @description 使用uuid根据timestamp生成id
 */
const getNoteId = () => {
    return uuidv1();
}

/**
 * @description 简化localStorage
 */
const storage = {
    get(key) {
        let notes = localStorage.getItem(key) || "[]";
        return JSON.parse(notes);
    },
    set(key, notes) {
        notes = JSON.stringify(notes);
        localStorage.setItem(key, notes);
    }
}

export {
    bubbleSortByTime,
    formatDate,
    getNoteId,
    storage,
}