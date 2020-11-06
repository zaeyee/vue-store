<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: String,
    color: {
      type: String,
      default: "rgb(102, 102, 102)"
    },
    activeColor: {
      type: String,
      default: "rgb(255, 51, 51)"
    }
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) > -1;
    },
    activeStyle() {
      return this.isActive
        ? { color: this.activeColor }
        : { color: this.color };
    }
  },
  methods: {
    itemClick() {
      if (this.$route.path === this.path) return;
      this.$router.replace(this.path);
    }
  },
  components: {}
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
}

.tab-bar-item img {
  width: 28px;
  height: 28px;
  margin-top: 3px;
  margin-bottom: -6px;
}
</style>
