<template>
  <div class="scroll-swrapper" ref="scroll">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  components: {
    BScroll
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      mouseWheel: true,
      probeType: this.probeType
    });
    // 监听滚动
    this.scroll.on("scroll", position => {
      this.$emit("scroll", position);
    });
  },
  methods: {
    // 滚动到指定位置
    scrollTo(x, y, time = 600) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
    // 刷新
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 获取y值
    getScrollY() {
      return this.scroll ? this.scroll.y : 0;
    }
  }
};
</script>

<style scoped>
</style>
