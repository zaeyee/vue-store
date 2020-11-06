<template>
  <div class="cate-content">
    <slot></slot>
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
.cate-content {
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  padding: 10px 0;
}
</style>
