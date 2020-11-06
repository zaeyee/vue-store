<template>
  <div class="detail-content">
    <simple-title>商品详情</simple-title>
    <!-- {{content}} -->
  </div>
</template>

<script>
import SimpleTitle from "components/content/simpleTitle/SimpleTitle";

export default {
  data() {
    return {};
  },
  components: {
    SimpleTitle
  },
  methods: {}
};
</script>

<style scoped>
.detail-content {
  padding: 10px 14px;
  background: #fff;
  margin-bottom: 6px;
  border-radius: 8px;
  box-shadow: 0 0 10px #eee;
}
</style>