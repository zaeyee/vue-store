<template>
  <div class="goods">
    <slot></slot>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    GoodsItem
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 4px 0;
}
</style>
