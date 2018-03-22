const uuidv1 = require('uuid/v1')
const moment = require('moment')
moment.locale('zh-cn')

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
      if (
        type
          ? ~~new Date(arr[i][date]) > ~~new Date(arr[j][date])
          : ~~new Date(arr[i][date]) < ~~new Date(arr[j][date])
      ) {
        let temp = arr[i]
        arr[i] = arr[j]
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
    let now = Date.now()
    let old = new Date(date).getTime()
    // 1天=86400000毫秒 没超过1天 友好展示
    friendly = now - old <= 86400000
  }
  date = moment(date)
  if (friendly) {
    return date.fromNow()
  } else {
    return date.format('YYYY-MM-DD HH:mm')
  }
}

/**
 * @description 使用uuid根据timestamp生成id
 */
const getNoteId = () => {
  return uuidv1()
}

/**
 * @description 简化localStorage
 */
const storage = {
  get (key) {
    let notes = localStorage.getItem(key)
    return JSON.parse(notes)
  },
  set (key, notes) {
    notes = JSON.stringify(notes)
    localStorage.setItem(key, notes)
  }
}

/**
 * @description 合并上传的Notes，如果id重复，新的替换旧的
 * @param {Array} oldNotes
 * @param {Array} newNotes
 * @returns {Array} 合并之后的notes
 */
const mergeNotes = (oldNotes, newNotes) => {
  let savedNotes = [...oldNotes]
  let findNote
  for (let i = 0; i < newNotes.length; i++) {
    findNote = savedNotes.find((note, index, notes) => {
      if (note.id === newNotes[i].id) {
        if (~~new Date(note.update_at) > ~~new Date(newNotes[i].update_at)) {
          return true
        } else {
          notes.splice(index, 1, newNotes[i])
          return true
        }
      }
    })
    if (!findNote) {
      savedNotes.push(newNotes[i])
    }
  }
  return savedNotes
}

/**
 * @description HTML5 Blob(二进制大对象) 将notes JSON数据下载到本地
 */
const downloadJSONFile = () => {
  if (Blob) {
    let notes = localStorage.getItem('notes')
    let blob = new Blob([notes], {
      type: 'application/json'
    })
    let url = URL.createObjectURL(blob)
    let a = document.createElement('a')
    a.href = url
    a.download = 'notes.json'
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  } else {
    alert('您的浏览器不支持Blob，不能下载！')
    console.log(`需要使用 Blob 浏览器兼容性：Blob URLs ✔ 94.48%
            IE ✘ 5.5+ ✔ 10+ Edge ✔ ¹ Firefox ✘ 2+ ✔ 4+ Chrome ✘ 4+ ✔ 8+ᵖ ✔ 23+ Safari
            ✘ 3.1+ ✔ 6+ᵖ ✔ 6.1+ Opera ✘ 9+ ✔ 15+`)
  }
}

/**
 * @description 导入notes 将json文件导入localStorage
 * @param {DOM} input file DOM对象
 */
const renderJSONFile = fileDOM => {
  return new Promise((resolve, reject) => {
    let file
    file = fileDOM.files[0]
    // 文件为空
    if (!file) {
      let err = '文件为空<br/>请选择.json文件！'
      return reject(err)
    }
    // 文件是否为.json
    let reg = /\.json$/i
    if (!reg.test(file.name)) {
      let err = '只能读取.json文件<br/>请选择.json文件导入信息！'
      return reject(err)
    }

    const reader = new FileReader() // new FileReader
    reader.readAsText(file, 'UTF-8') // 读取文件
    // 读取完毕
    reader.onload = function (evt) {
      let notes = evt.target.result // 读取文件内容
      notes = JSON.parse(notes)
      return resolve(notes)
    }
    // 读取错误
    reader.onerror = function () {
      let err = '读取文件出现错误，请重试！'
      return reject(err)
    }
  })
}

export {
  bubbleSortByTime,
  formatDate,
  getNoteId,
  storage,
  downloadJSONFile,
  renderJSONFile,
  mergeNotes
}
