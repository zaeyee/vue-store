<template>
  <goods>
    <goods-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </goods>
</template>

<script>
import { Goods, GoodsItem } from "components/content/goods";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    Goods,
    GoodsItem
  }
};
</script>

<style scoped>
</style>
