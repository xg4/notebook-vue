<template>
  <div class="xg-user">
    <div class="xg-user-profile">
      <span class="xg-user-profile-avatar">
        <svg viewBox="0 0 122 122"
             width="100%"
             height="100%">
          <path fill="#DCDCDC"
                fill-rule="evenodd"
                d="M61 121.5c33.413 0 60.5-27.087 60.5-60.5S94.413.5 61 .5.5 27.587.5 61s27.087 60.5 60.5 60.5zm12.526-45.806c-.019 3.316-.108 6.052.237 9.825 3.286 8.749 18.816 9.407 28.468 17.891-1.833 1.998-6.768 6.788-15 10.848-7.02 3.463-16.838 6.416-24.831 6.416-17.366 0-32.764-7.149-42.919-17.264 9.713-8.407 25.49-9.173 28.769-17.891.345-3.773.258-6.509.24-9.825l-.004-.002c-1.903-.985-5.438-7.268-6.01-12.571-1.492-.12-3.843-1.561-4.534-7.247-.37-3.053 1.107-4.77 2.004-5.31-5.046-19.212 1.507-33.16 20.749-34.406 5.753 0 10.18 1.52 11.909 4.523 15.35 2.702 11.756 22.658 9.328 29.882.899.54 2.376 2.258 2.004 5.31-.689 5.687-3.042 7.127-4.534 7.248-.575 5.305-3.25 10.82-5.873 12.57l-.003.003zM61 120.5C28.14 120.5 1.5 93.86 1.5 61S28.14 1.5 61 1.5s59.5 26.64 59.5 59.5-26.64 59.5-59.5 59.5z"></path>
        </svg>
      </span>
      <div class="xg-user-profile-detail">
        <p class="xg-user-profile-username">用户名</p>
        <p>签名</p>
      </div>
      <span class="xg-user-profile-icon">
        <i class="icon icon-arrow-right"></i>
      </span>
    </div>
    <xg-number-board :board="board"></xg-number-board>
    <router-link to="/profile/tag">
      <xg-profile-item>
        <i class="icon icon-tag"
           style="color:rgb(74, 165, 240);"
           slot="icon"></i>
        标签管理
      </xg-profile-item>
    </router-link>
    <xg-profile-item @click.native="handleExport">
      <i class="icon icon-export"
         style="color:rgb(74, 165, 240);"
         slot="icon"></i>
      导出笔记
    </xg-profile-item>
    <xg-profile-item @click.native="handleImport">
      <i class="icon icon-import"
         style="color: rgb(106, 194, 11);"
         slot="icon"></i>
      导入笔记
      <template v-if="filename"
                slot="content">文件名：{{filename}}</template>
    </xg-profile-item>
    <input ref="file"
           type="file"
           class="import-notes-file"
           @change="upload">
    <div class="copyright">
      <p>
        <a href="https://github.com/xg4"
           target="_blank">
          <svg viewBox="0 0 24 24"
               height="32"
               width="32"
               aria-hidden="true">
            <path fill-rule="evenodd"
                  fill="#586069"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
        </a>
      </p>
      <p>
        &copy; 2018
        <span>xg4</span>
      </p>
    </div>
  </div>
</template>

<script>
import { downloadJSONFile, renderJSONFile } from '../utils'
import * as types from '../store/types'
import XgProfileItem from './ProfileItem'
import XgNumberBoard from './NumberBoard'

export default {
  name: 'XgProfile',
  data () {
    return {
      filename: ''
    }
  },
  computed: {
    board () {
      let all = this.$store.getters.allNotes
      let finish = this.$store.getters.finishNotes
      let collect = this.$store.getters.collectNotes
      return [
        {
          name: '全部',
          value: all.length,
          link: '/notes/all',
          color: '#26a2ff'
        },
        {
          name: '完成',
          value: finish.length,
          link: '/notes/finish',
          color: 'rgb(255, 95, 62)'
        },
        {
          name: '收藏',
          value: collect.length,
          link: '/collection',
          color: 'rgb(247, 186, 42)'
        }
      ]
    }
  },
  methods: {
    async handleExport () {
      try {
        await this.$messagebox.confirm('您确定要导出笔记为.json文件吗？')
      } catch (err) {
        return
      }
      downloadJSONFile()
    },
    async handleImport () {
      try {
        await this.$messagebox.confirm(
          '您确定要导入笔记，此操作会将ID相同的笔记合并'
        )
        this.$refs.file.click()
      } catch (err) { }
    },
    async upload (evt) {
      if (!evt.target.files[0]) {
        this.filename = ''
        return
      }
      this.filename = evt.target.files[0].name
      let notes
      try {
        notes = await renderJSONFile(this.$refs.file)
      } catch (err) {
        return this.$messagebox.alert(err)
      }
      await this.$store.dispatch(types.UPLOAD_NOTES, notes)
      this.$messagebox.alert('上传成功！')
    }
  },
  components: {
    XgProfileItem,
    XgNumberBoard
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.xg-user {
  background: rgba(245, 245, 245);
}

.xg-user-profile {
  display: flex;
  padding: 6.666667vw 4vw;
  color: #fff;
  align-items: center;
  background-image: linear-gradient(90deg, #0af, #0085ff);
}

.xg-user-profile-avatar {
  width: 16vw;
  height: 16vw;
  flex-shrink: 0;
  font-size: 1.6rem;
  line-height: 16vw;
  border-radius: 50%;
  background: #fff;
  display: inline-block;
  vertical-align: middle;
}

.xg-user-profile-detail {
  margin-left: 4.8vw;
  overflow: hidden;
  flex-grow: 1;
}

.xg-user-profile-detail p {
  margin: 0;
}

.xg-user-profile-username {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 1rem;
  margin-bottom: 2.133333vw;
  font-weight: 700;
}

.xg-user-profile-icon {
  width: 2.666667vw;
  height: 5.6vw;
  color: #fff;
}

.import-notes-file {
  display: none;
}

.copyright {
  padding: 25px;
  font-size: 14px;
  color: #586069;
  text-align: center;
  word-spacing: 0.05em;
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}

.copyright p {
  margin: 0;
}
</style>
