<template>
  <nav-bar class="detail-nav" :class="{active:active}">
    <div slot="left" class="icon" @click="backClick">
      <img src="~assets/img/back_black.svg" v-if="active" />
      <img src="~assets/img/back_white.svg" v-else />
    </div>
    <div slot="center" class="title">
      <div
        class="title-item"
        v-for="(item,index) in titles"
        :key="index"
        :class="{active:index===currentIndex}"
        @click="titleItemClick(index)"
      >{{item}}</div>
    </div>
    <div slot="right" class="icon">
      <img src="~assets/img/share_black.svg" v-if="active" />
      <img src="~assets/img/share_white.svg" v-else />
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      titles: ["商品", "评价", "详情", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    backClick() {
      this.$router.back();
    },
    titleItemClick(index) {
      this.currentIndex = index;
    }
  },
  components: {
    NavBar
  }
};
</script>

<style scoped>
.detail-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  box-shadow: none;
  z-index: 99;
}

.detail-nav.active {
  background: #fefefe;
}

.icon {
  width: 30px;
  height: 30px;
  margin: auto;
  padding: 3px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: all 0.3s;
}

.icon img {
  width: 100%;
  height: 100%;
}

.detail-nav.active .icon {
  color: var(--color-text);
  background: transparent;
}

.title {
  display: flex;
  justify-content: center;
  font-size: 13px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}

.detail-nav.active .title {
  opacity: 1;
  visibility: visible;
}

.title-item {
  position: relative;
  margin: 0 8px;
  transition: all 0.3s ease-in-out;
}

.title-item.active {
  color: var(--color-high-text);
  font-weight: 700;
}

.title-item::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--color-high-text), var(--color-tint));
  border-radius: 25px;
  transition: all 0.3s;
}

.title-item.active::after {
  width: 100%;
}
</style>