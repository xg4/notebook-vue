<template>
  <header>
    <div class="xg-header" :class="{ 'is-fixed': fixed }">
      <div class="xg-header-button is-left">
        <mt-button v-if="showBack" @click="handleBack" icon="back">返回</mt-button>
      </div>
      <h1 class="xg-header-title" v-text="title"></h1>
      <div class="xg-header-button is-right">
        <mt-button icon="more" @click="handleSheet" v-if="!actions.length==0"></mt-button>
      </div>
    </div>
    <div class="xg-header is-placeholder" v-if="fixed"></div>
    <mt-actionsheet :actions="actions" v-model="sheetVisible">
    </mt-actionsheet>
  </header>
</template>

<script>
import * as types from "../store/types";

export default {
  name: "xg-header",
  props: {
    fixed: Boolean,
    title: String
  },
  data() {
    return {
      sheetVisible: false,
      loading: "",
      notes_sheet: [
        {
          name: "新建笔记",
          method: () => {
            this.$router.push("/create/note");
          }
        },
        {
          name: "按时间排序",
          method: () => {
            this.$store.commit(types.SORT_BY_TIME);
          }
        },
        {
          name: "删除已完成",
          method: () => {
            this.$messagebox
              .confirm("您确定要删除全部已完成笔记?<br/>此操作不可恢复！")
              .then(action => {
                this.loading = true;
                this.$store
                  .dispatch(types.REMOVE_FINISH_NOTES)
                  .then(() => {
                    this.$toast({ message: "删除成功" });
                  })
                  .catch(() => {
                    this.$toast({ message: "删除失败" });
                  })
                  .finally(() => {
                    this.loading = false;
                    this.$indicator.close();
                  });
              })
              .catch(() => {});
          }
        },
        {
          name: "删除全部笔记",
          method: () => {
            this.$messagebox
              .confirm("您确定要删除全部笔记?<br/>此操作不可恢复！")
              .then(action => {
                this.loading = true;
                this.$store
                  .dispatch(types.REMOVE_NOTES)
                  .then(() => {
                    this.$toast({ message: "删除成功" });
                  })
                  .catch(() => {
                    this.$toast({ message: "删除失败" });
                  })
                  .finally(() => {
                    this.loading = false;
                    this.$indicator.close();
                  });
              })
              .catch(() => {});
          }
        }
      ],
      note_sheet: [
        {
          name: "编辑",
          method: () => {
            this.$router.push(`/note/${this.$route.params.id}/edit`);
          }
        },
        {
          name: "删除",
          method: () => {
            this.$messagebox
              .confirm("您确定要删除此笔记?<br/>此操作不可恢复！")
              .then(action => {
                this.loading = true;
                this.$store
                  .dispatch(types.REMOVE_NOTE, this.$route.params.id)
                  .then(() => {
                    this.$toast({ message: "删除成功" });
                    this.$router.back();
                  })
                  .catch(() => {
                    this.$toast({ message: "删除失败" });
                  })
                  .finally(() => {
                    this.loading = false;
                    this.$indicator.close();
                  });
              })
              .catch(() => {});
          }
        }
      ]
    };
  },
  watch: {
    loading(newVal) {
      if (newVal) {
        // Indicator 提示
        this.$indicator.open({
          spinnerType: "fading-circle"
        });
      } else {
        this.$indicator.close();
      }
    }
  },
  computed: {
    actions() {
      let sheetName = this.$route.meta.sheetName;
      return this[sheetName] ? this[sheetName] : [];
    },
    showBack() {
      return this.$route.meta.showBack;
    }
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    handleSheet() {
      this.sheetVisible = !this.sheetVisible;
    }
  }
};
</script>

<style scoped>
.xg-header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
  height: 40px;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  box-sizing: border-box;
  color: #fff;
  font-size: 14px;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  position: relative;
}

.xg-header.is-placeholder {
  visibility: hidden;
  position: static;
}
.xg-header .mint-button {
  background-color: transparent;
  border: 0;
  box-shadow: none;
  color: inherit;
  display: inline-block;
  padding: 0;
  font-size: inherit;
}
.xg-header .mint-button::after {
  content: none;
}
.xg-header.is-fixed {
  top: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 1;
}
.xg-header-button {
  -webkit-box-flex: 0.5;
  -ms-flex: 0.5;
  flex: 0.5;
}
.xg-header-button > a {
  color: inherit;
}
.xg-header-button.is-right {
  text-align: right;
}
.xg-header-button.is-left {
  text-align: left;
}
.xg-header-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: inherit;
  font-weight: 600;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
</style>
