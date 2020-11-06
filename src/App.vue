<template>
  <div id="app">
    <tab-bar />
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import TabBar from "components/content/tabBar/TabBar";

export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    TabBar
  }
};
</script>

<style scoped>
@import "assets/css/base.css";
</style>
