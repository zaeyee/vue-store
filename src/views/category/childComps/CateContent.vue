<template>
  <cate-content>
    <cate-content-item v-for="(item,index) in childCategories" :key="index">
      <img :src="item.image" />
      {{item.name}}
    </cate-content-item>
  </cate-content>
</template>

<script>
import { CateContent, CateContentItem } from "components/content/cateContent";

export default {
  props: {
    childCategories: {
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
    CateContent,
    CateContentItem
  }
};
</script>

<style scoped>
</style>
