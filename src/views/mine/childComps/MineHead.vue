<template>
  <div class="head-box">
    <div class="head-bg"></div>
    <div class="user-info">
      <div class="head-pic">
        <img :src="userInfo.headPic" />
      </div>
      <div class="nickname">{{userInfo.nickname}}</div>
    </div>
    <div class="data">
      <div class="data-item">
        <span class="number">{{userInfo.collectionNum}}</span>
        <span class="text">收藏</span>
      </div>
      <div class="data-item">
        <span class="number">{{userInfo.concernNum}}</span>
        <span class="text">关注</span>
      </div>
      <div class="data-item">
        <span class="number">{{userInfo.couponNum}}</span>
        <span class="text">优惠券</span>
      </div>
      <div class="data-item">
        <span class="number">{{userInfo.historyNum}}</span>
        <span class="text">浏览记录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          headPic: "",
          nickname: "昵称",
          collectionNum: NaN,
          concernNum: NaN,
          couponNum: NaN,
          historyNum: NaN
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.head-box {
  position: relative;
  padding-top: 20px;
  padding-bottom: 5px;
}
.head-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 25px);
  border-radius: 0 0 300px 300px/0 0 20px 20px;
  background: linear-gradient(90deg, var(--color-high-text), var(--color-tint));
  z-index: -1;
}
.user-info {
  position: relative;
  display: flex;
  padding: 0 20px;
}
.head-pic {
  width: 56px;
  height: 56px;
  padding: 2px;
  background: #fff;
  border-radius: 50%;
  overflow: hidden;
}
.head-pic img {
  width: 100%;
  height: 100%;
}
.nickname {
  flex: 1;
  color: #fff;
  font-size: 20px;
  line-height: 56px;
  margin-left: 10px;
}
.data {
  display: flex;
  padding: 10px 0;
}
.data-item {
  flex: 1;
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}
.data-item .number {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 25px;
}
.data-item .text {
  color: #eee;
  font-size: 12px;
}
</style>