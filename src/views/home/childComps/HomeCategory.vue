<template>
  <grid>
    <grid-item v-for="(item,index) in categorise" :key="index">
      <img :src="item.image" />
      {{item.title}}
    </grid-item>
  </grid>
</template>

<script>
import { Grid, GridItem } from "components/common/grid";

export default {
  props: {
    categorise: {
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
    Grid,
    GridItem
  }
};
</script>

<style scoped>
</style>
