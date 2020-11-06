<template>
  <div class="choose-item" @click="chooseItemClick">
    <div class="choose-key">
      <slot name="key"></slot>
    </div>
    <div class="choose-value">
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {
    chooseItemClick() {
      this.$emit("chooseItemClick");
    }
  }
};
</script>

<style scoped>
.choose-item {
  display: flex;
  align-items: center;
  min-height: 48px;
  padding: 14px;
  font-size: 13px;
  color: #333;
}

.choose-item:not(:last-child) {
  border-bottom: 1px solid #f8f8f8;
}

.choose-key {
  margin-right: 14px;
}

.choose-value {
  flex: 1;
}
</style>