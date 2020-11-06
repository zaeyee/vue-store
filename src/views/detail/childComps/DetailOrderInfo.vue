<template>
  <choose>
    <choose-item>
      <div slot="key">已选</div>
      <div slot="value">诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼</div>
    </choose-item>
    <choose-item>
      <div slot="key">送至</div>
      <div slot="value">诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼诉讼</div>
    </choose-item>
  </choose>
</template>

<script>
import { Choose, ChooseItem } from "components/content/choose";

export default {
  props: {
    chooses: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    Choose,
    ChooseItem
  },
  methods: {}
};
</script>

<style scoped>
</style>