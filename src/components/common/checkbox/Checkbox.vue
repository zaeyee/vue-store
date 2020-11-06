<template>
  <div class="checkbox" @click="checkboxClick">
    <div class="checkbox-icon" :class="{active:checkStatus}"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkStatus: this.checked
    };
  },
  methods: {
    checkboxClick() {
      this.checkStatus = !this.checkStatus;
      this.$emit("changeCheck", this.checkStatus);
    },
    getCheckStatus() {
      return this.checkStatus;
    }
  },
  components: {}
};
</script>

<style >
.checkbox {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.checkbox-icon {
  width: 26px;
  height: 26px;
  margin-right: 2px;
  background: url(~assets/img/checkbox.svg) no-repeat center/cover;
}
.checkbox-icon.active {
  background-image: url(~assets/img/checkbox_active.svg);
  animation: fadeIn 0.3s;
}
</style>