<template>
  <button :type="nativeType"
          class="xg-button"
          :class="[
          'xg-button-' + type, 'xg-button-' + size,
          {
            'is-disabled': disabled,
            'is-plain': plain
          }]"
          @click="handleClick"
          :disabled="disabled">
    <label class="xg-button-text">
      <slot></slot>
    </label>
  </button>
</template>

<script>
export default {
  name: 'XgButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    size: String,
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>

<style>
.xg-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 4px;
  border: 0;
  box-sizing: border-box;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 41px;
  outline: 0;
  overflow: hidden;
  position: relative;
  text-align: center;
}
.xg-button::after {
  background-color: #000;
  content: ' ';
  opacity: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
}
.xg-button:not(.is-disabled):active::after {
  opacity: 0.4;
}
.xg-button.is-disabled {
  opacity: 0.6;
}
.xg-button-default {
  color: #656b79;
  background-color: #f6f8fa;
  box-shadow: 0 0 1px #b8bbbf;
}
.xg-button-default.is-plain {
  border: 1px solid #5a5a5a;
  background-color: transparent;
  box-shadow: none;
  color: #5a5a5a;
}
.xg-button-primary {
  color: #fff;
  background-color: #2d8cf0;
}
.xg-button-primary.is-plain {
  border: 1px solid #2d8cf0;
  background-color: transparent;
  color: #2d8cf0;
}
.xg-button-success {
  color: #fff;
  background-color: #19be6b;
}
.xg-button-success.is-plain {
  border: 1px solid #19be6b;
  background-color: transparent;
  color: #19be6b;
}
.xg-button-danger {
  color: #fff;
  background-color: #ef4f4f;
}
.xg-button-danger.is-plain {
  border: 1px solid #ef4f4f;
  background-color: transparent;
  color: #ef4f4f;
}
.xg-button-large {
  display: block;
  width: 100%;
}
.xg-button-normal {
  display: inline-block;
  padding: 0 12px;
}
.xg-button-small {
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}
</style>
