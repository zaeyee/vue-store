<template>
  <div class="slide">
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
.slide {
  flex-shrink: 0;
  width: 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
