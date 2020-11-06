<template>
  <div class="grid-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: "#"
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
.grid-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  padding: 5px;
  font-size: 13px;
  white-space: nowrap;
}
.grid-item img {
  width: 50px;
  height: 50px;
  margin-bottom: 2px;
}
</style>