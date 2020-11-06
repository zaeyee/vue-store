<template>
  <cate-tab>
    <cate-tab-item
      v-for="(item,index) in categories"
      :key="index"
      @click.native="tabItemClick(index)"
      :isActive="index===currentCategoryIndex"
    >{{item.name}}</cate-tab-item>
  </cate-tab>
</template>

<script>
import { CateTab, CateTabItem } from "components/content/cateTab";

export default {
  props: {
    categories: {
      type: Array,
      defaulr() {
        return [];
      }
    }
  },
  data() {
    return {
      currentCategoryIndex: 0
    };
  },
  components: {
    CateTab,
    CateTabItem
  },
  methods: {
    // item点击
    tabItemClick(index) {
      this.currentCategoryIndex = index;
      this.$emit("changeCategory", this.categories[index].id);
    }
  }
};
</script>

<style scoped>
</style>
