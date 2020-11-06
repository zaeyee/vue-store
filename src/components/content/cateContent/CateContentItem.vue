<template>
  <div class="cate-content-item">
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
.cate-content-item {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.333333%;
  margin: 10px 0;
  animation: fadeIn .3s;
}
.cate-content-item img {
  width: 60px;
  height: 60px;
}
</style>
