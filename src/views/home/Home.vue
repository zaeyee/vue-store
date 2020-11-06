<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <home-swiper :banners="banners" />
      <home-category :categorise="categorise" />
      <simple-title>猜你喜欢</simple-title>
      <home-goods :goods="goods" />
    </scroll>
    <back-top @click.native="backTop" v-show="isBackTopShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import SimpleTitle from "components/content/simpleTitle/SimpleTitle";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeCategory from "./childComps/HomeCategory";
import HomeGoods from "./childComps/HomeGoods";

import { getBanner, getCategory, getGoods } from "network/home";

export default {
  data() {
    return {
      banners: [],
      categorise: [],
      goods: [],
      isBackTopShow: false,
      scrollY: 0
    };
  },
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeCategory,
    HomeGoods,
    SimpleTitle,
    BackTop
  },
  created() {
    this.getBanner();
    this.getCategory();
    this.getGoods();
  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh, 500);
    // 监听商品图片加载，刷新BScroll
    this.$bus.$on("goodsImageLoad", () => {
      refresh();
    });
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.scrollY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
  },
  methods: {
    // 获取banner数据
    getBanner() {
      getBanner().then(res => {
        if (res.code !== 200) {
          console.log("错误：" + res.data.msg);
          return;
        }
        this.banners = res.data;
      });
    },
    // 获取分类数据
    getCategory() {
      getCategory().then(res => {
        if (res.code !== 200) {
          console.log("错误：" + res.data.msg);
          return;
        }
        this.categorise = res.data;
      });
    },
    // 获取商品数据
    getGoods() {
      getGoods().then(res => {
        if (res.code !== 200) {
          console.log("错误：" + res.data.msg);
          return;
        }
        this.goods = res.data;
      });
    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    // 内容滚动
    contentScroll(position) {
      this.isBackTopShow = position.y < -600;
    },
    // 防抖函数
    debounce(func, delay) {
      let timer = null;
      return function(...args) {
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-nav {
  color: #fff;
  font-size: 16px;
  background: var(--color-high-text);
}
.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
