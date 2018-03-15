const uuidv1 = require('uuid/v1');
const moment = require('moment');
moment.locale('zh-cn');

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
        friendly = now - old >= 86400000 ? false : true;
    }
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
        let notes = localStorage.getItem('notes');
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
 * @description 导入notes 将json文件导入localStorage
 * @param {DOM} input file DOM对象
 */
const renderFile = (fileDOM) => {
    return new Promise((resolve, reject) => {
        let file;
        file = fileDOM.files[0];
        // 文件为空
        if (!file) {
            reject('文件为空，请选择.json文件！')
        }
        // 文件是否为.json
        let reg = /\.json$/i;
        if (!reg.test(file.name)) {
            reject('只能读取.json文件，请选择.json文件导入信息！')
        }

        const reader = new FileReader(); // new FileReader
        reader.readAsText(file, "UTF-8"); // 读取文件
        // 读取完毕
        reader.onload = function (evt) {
            let notes = evt.target.result; // 读取文件内容
            notes = JSON.parse(notes);
            resolve(notes);
        };
        // 读取错误
        reader.onerror = function () {
            reject('读取文件出现错误，请重试！');
        }
    })
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
const local = {
    get(key) {
        let notes = localStorage.getItem(key) || "[]";
        return JSON.parse(notes);
    },
    set(key, notes) {
        notes = JSON.stringify(notes);
        localStorage.setItem(key, notes);
    }
}

export { formatDate, downloadJSONFile, getNoteId, local, renderFile }