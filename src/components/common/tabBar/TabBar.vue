<template>
  <div id="tab-bar">
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

<style>
#tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  background: #fff;
  box-shadow: 0 0 8px rgb(244, 244, 244);
  z-index: 99;
}
</style>
