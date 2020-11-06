<template>
  <div id="detail">
    <detail-nav-bar :active="navBarActive" />
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :topImages="detail.topImages" />
      <detail-base-info :baseInfo="detail.baseInfo" />
      <detail-order-info />
      <detail-shop-info />
      <detail-content />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailOrderInfo from "./childComps/DetailOrderInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailContent from "./childComps/DetailContent";

export default {
  data() {
    return {
      id: null,
      navBarActive: false,
      detail: {
        topImages: [
          "https://s11.mogucdn.com/mlcdn/c45406/180802_1j117aj7l68ijbg9b46a0g9felhb0_640x960.jpg_640x960.v1cAC.70.webp",
          "https://s5.mogucdn.com/mlcdn/c45406/180802_5cakik3a8k1kcceiicc3g988fckel_640x960.jpg_640x960.v1cAC.70.webp",
          "https://s11.mogucdn.com/mlcdn/c45406/180802_2b5adb2lci51faef964bde3l1i9h6_640x960.jpg_640x960.v1cAC.70.webp",
          "https://s5.mogucdn.com/mlcdn/c45406/180802_7b0jjhd95hkb3bi92g5bhlak22j7g_640x960.jpg_640x960.v1cAC.70.webp",
          "https://s5.mogucdn.com/mlcdn/c45406/180802_0dha6c01h17el2k336k8i9237c0l0_640x960.jpg_640x960.v1cAC.70.webp",
          "https://s11.mogucdn.com/mlcdn/c45406/180802_3ij61gehlle4k08825jd2bk23i714_640x960.jpg_640x960.v1cAC.70.webp"
        ],
        baseInfo: {
          titleTag: "",
          title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
          price: 35,
          sold: "777"
        }
      }
    };
  },
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailOrderInfo,
    DetailShopInfo,
    DetailContent
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    contentScroll(position) {
      this.navBarActive = position.y < -100;
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
}

.content {
  height: calc(100% - 49px);
  overflow: hidden;
}
</style>