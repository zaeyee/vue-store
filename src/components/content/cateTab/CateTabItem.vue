<template>
  <div class="cate-tab-item" :class="isActive?'active':''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.cate-tab-item {
  position: relative;
  padding: 12px;
  text-align: center;
}
.cate-tab-item.active {
  color: var(--color-high-text);
  font-weight: 700;
  background: #fff;
  animation: fadeIn 0.3s;
}
.cate-tab-item.active::before {
  content: "";
  position: absolute;
  top: calc(50% - 10px);
  left: 0;
  width: 4px;
  height: 20px;
  background: var(--color-high-text);
  border-radius: 2px;
}
</style>
