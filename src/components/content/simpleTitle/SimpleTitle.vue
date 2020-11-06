<template>
  <div class="title">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.title {
  text-align: center;
  color: var(--color-text);
  line-height: 40px;
}

.title span {
  position: relative;
}

.title span::before,
.title span::after {
  content: "";
  position: absolute;
  width: 32px;
  height: 1px;
  top: 50%;
  background: #ccc;
}

.title span::before {
  left: -45px;
}

.title span::after {
  right: -45px;
}
</style>
