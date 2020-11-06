<template>
  <div class="back-top">
    <img src="~assets/img/top.svg" />
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
@keyframes scale {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
.back-top {
  position: fixed;
  right: 8px;
  bottom: 57px;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 50%;
  box-shadow: 0 1px 5px #ccc;
  animation: scale 0.3s;
}
.back-top img {
  width: 100%;
  height: 100%;
}
</style>
