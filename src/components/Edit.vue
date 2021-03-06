<template>
  <div class="xg-form">
    <el-form ref="noteForm"
             :rules="rules"
             :model="form"
             label-width="60px">
      <el-form-item label="标题"
                    prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>
      <el-form-item label="内容"
                    prop="content">
        <el-input type="textarea"
                  v-model="form.content"></el-input>
      </el-form-item>
      <el-form-item label="标签"
                    prop="tag">
        <xg-select-tag v-model="form.tag"
                       :tagMap="tagMap">
        </xg-select-tag>
      </el-form-item>
      <el-form-item label="是否收藏"
                    label-width="80px">
        <el-switch v-model="form.collect"></el-switch>
      </el-form-item>
      <el-form-item label="是否完成"
                    label-width="80px">
        <el-switch v-model="form.finish"></el-switch>
      </el-form-item>
      <el-form-item label-width="0"
                    class="form-btn-group">
        <xg-button size="large"
                   :disabled="loading"
                   type="primary"
                   @click="submitForm()">
          提交
        </xg-button>
        <xg-button size="large"
                   @click="restoreForm()">
          还原
        </xg-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import * as types from '../store/types'
import XgSelectTag from './SelectTag'
import XgButton from './button'

export default {
  name: 'XgEditeNote',
  data () {
    return {
      loading: '',
      note: '',
      form: {
        id: '',
        title: '',
        content: '',
        tag: 'primary',
        finish: false,
        collect: false,
        create_at: '',
        update_at: ''
      },
      rules: {
        title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
        content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
        tag: [{ required: true, message: '请选择标签类型', trigger: 'change' }]
      }
    }
  },
  beforeMount () {
    this.getNote()
  },
  computed: {
    tagMap () {
      return this.$store.state.tagMap
    }
  },
  watch: {
    loading (newVal) {
      if (newVal) {
        // Indicator 提示
        this.$indicator.open({
          spinnerType: 'fading-circle'
        })
      } else {
        this.$indicator.close()
      }
    }
  },
  methods: {
    getNote () {
      this.loading = true
      this.$store
        .dispatch(types.GET_NOTE, this.$route.params.id)
        .then(note => {
          this.note = note
          this.form = { ...note }
        })
        .catch(() => {
          this.$toast({ message: '获取数据失败' })
        })
        .finally(() => {
          this.loading = false
          this.$indicator.close()
        })
    },
    restoreForm () {
      this.form = { ...this.note }
    },
    submitForm () {
      this.loading = true
      // 验证表单
      this.$refs.noteForm.validate(valid => {
        if (valid) {
          // 验证成功
          this.form.update_at = new Date()
          // dispatch store
          this.$store
            .dispatch(types.EDIT_NOTE, this.form)
            .then(() => {
              this.$messagebox.alert('编辑成功').then(action => {
                this.$router.push(`/note/${this.form.id}`)
              })
            })
            .catch(() => {
              this.$toast({ message: '编辑失败，请重试' })
            })
            .finally(() => {
              this.loading = false
              this.$indicator.close()
            })
        } else {
          // 验证失败
          this.loading = false
          this.$toast({ message: '信息不完整' })
          return false
        }
      })
    }
  },
  components: {
    XgSelectTag,
    XgButton
  }
}
</script>

<style scoped>
.xg-form {
  margin-top: 10px;
  padding: 10px;
}

.form-btn-group button {
  margin-bottom: 20px;
}

.primary {
  color: #409eff;
}

.success {
  color: #67c23a;
}

.info {
  color: #909399;
}

.warning {
  color: #e6a23c;
}

.danger {
  color: #f56c6c;
}
</style>
