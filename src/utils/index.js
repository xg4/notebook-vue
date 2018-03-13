/**
 * @description format data
 * @param {Date}
 * @param {Boolean} 是否友好展示
 */
const moment = require('moment');
moment.locale('zh-cn');
const formatDate = (date = Date.now(), friendly = false) => {
    date = moment(date);
    if (friendly) {
        return date.fromNow();
    } else {
        return date.format('YYYY-MM-DD HH:mm');
    }
}

/**
 * @description HTML5 Blob(二进制大对象) 将notes JSON数据下载到本地
 */
const downloadJSONFile = () => {
    if (Blob) {
        let notes = JSON.stringify(localStorage.getItem('notes'));
        let blob = new Blob([notes], { type: "application/json" });
        let url = URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'notes.json';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    } else {
        alert('您的浏览器不支持Blob，不能下载！');
        console.log(`需要使用 Blob 浏览器兼容性：Blob URLs ✔ 94.48%
            IE ✘ 5.5+ ✔ 10+ Edge ✔ ¹ Firefox ✘ 2+ ✔ 4+ Chrome ✘ 4+ ✔ 8+ᵖ ✔ 23+ Safari
            ✘ 3.1+ ✔ 6+ᵖ ✔ 6.1+ Opera ✘ 9+ ✔ 15+`);
    }
}

/**
 * @description 随机创建笔记的ID(1-9999)
 * @returns {Number}
 */
const getID = () => {
    return Math.floor(Math.random() * 9998 + 1);
}

/**
 * @description 简化localStorage
 */
const local = {
    get(key) {
        let notes = localStorage.getItem(key) || "[]"
        return JSON.parse(notes);
    },
    set(key, val) {
        localStorage.setItem(key, JSON.stringify(val));
    }
}

export { formatDate, downloadJSONFile, getID, local }