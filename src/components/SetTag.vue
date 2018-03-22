<template>
  <div class="xg-tag">
    <h2>自定义标签 </h2>
    <p>点击标签进行修改</p>
    <div v-for="(tag,index) in tagMap"
         :key='index'
         class="xg-tag-item"
         :class="index">
      <el-tag :type="index"
              @click.native="changeTag(index)">
        <i class="icon icon-tag"></i>
        {{tag}}
      </el-tag>
      标签名：{{tag}}
    </div>
    <xg-button class="btn"
               type="primary"
               @click="uploadTagMap"
               size="large">
      保存
    </xg-button>
  </div>
</template>

<script>
import * as types from '../store/types'
import XgButton from './button'

export default {
  name: 'XgSetTag',
  beforeMount () {
    this.getTagMap()
  },
  data () {
    return {
      tagMap: ''
    }
  },
  methods: {
    getTagMap () {
      this.tagMap = { ...this.$store.state.tagMap }
    },
    async changeTag (tagType) {
      let tagName
      try {
        tagName = await this.$messagebox.prompt('请输入标签名')
        tagName = tagName.value
      } catch (err) {
        return
      }
      if (tagName && tagName.length <= 5) {
        this.tagMap[tagType] = tagName
      } else {
        this.$messagebox.alert('标签名应在1~5个字符之间')
      }
    },
    async uploadTagMap () {
      try {
        await this.$store.dispatch(types.UPDATE_TAG_MAP, this.tagMap)
      } catch (err) {
        this.$messagebox.alert('保存失败')
        return
      }
      this.$messagebox.alert('保存成功').then(action => {
        this.$router.back()
      })
    }
  },
  components: {
    XgButton
  }
}
</script>

<style scoped>
.xg-tag {
  padding: 0 50px;
}

.xg-tag-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

h2 {
  text-align: center;
}

p {
  text-align: center;
}

.btn {
  margin: 10px 0;
}

.xg-tag-item {
  color: #409eff;
}

.xg-tag-item.success {
  color: #67c23a;
}

.xg-tag-item.info {
  color: #909399;
}

.xg-tag-item.warning {
  color: #e6a23c;
}

.xg-tag-item.danger {
  color: #f56c6c;
}
</style>
