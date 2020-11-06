<template>
  <swiper class="swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img :src="item" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    topImages: {
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
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped>
.swiper {
  height: 380px;
}
</style>