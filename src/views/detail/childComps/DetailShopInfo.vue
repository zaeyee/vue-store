<template>
  <div class="shop-info-box">
    <div class="shop-info">
      <div class="shop-logo">
        <img :src="shopInfo.logo" />
      </div>
      <div class="shop-content">
        <div class="shop-name">{{shopInfo.name}}</div>
        <div class="shop-icon">
          <img src="~assets/img/service.svg" />
        </div>
        <div class="shop-icon">
          <img src="~assets/img/shop.svg" />
        </div>
      </div>
    </div>
    <div class="shop-scores">
      <div class="score-item">
        <span class="score-text">宝贝描述</span>
        <span class="score-number">{{shopInfo.scores.goodsDescription}}</span>
        <span class="score-grade"></span>
      </div>
      <div class="score-item">
        <span class="score-text">卖家描述</span>
        <span class="score-number">{{shopInfo.scores.sellerServices}}</span>
        <span class="score-grade"></span>
      </div>
      <div class="score-item">
        <span class="score-text">物流服务</span>
        <span class="score-number">{{shopInfo.scores.logisticsServices}}</span>
        <span class="score-grade"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shopInfo: {
        logo: "https://dao.ouzero.com/favicon.ico",
        name: "欧零工作室",
        scores: {
          goodsDescription: 4.8,
          sellerServices: 4.7,
          logisticsServices: 4.9
        }
      }
    };
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.shop-info-box {
  background: #fff;
  padding: 12px 14px;
  margin-bottom: 6px;
  border-radius: 8px;
  box-shadow: 0 0 10px #eee;
}

.shop-info {
  display: flex;
}

.shop-logo {
  flex: none;
  width: auto;
  height: 50px;
  border-radius: 2px;
  overflow: hidden;
}

.shop-logo img {
  height: 100%;
}

.shop-content {
  flex: 1;
  display: flex;
  justify-items: center;
  align-items: center;
}

.shop-name {
  flex: 1;
  margin-left: 8px;
  font-size: 16px;
  color: #555;
}

.shop-icon {
	width: 30px;
	height: 30px;
	padding: 4px;
	margin-left: 10px;
	border: 1px solid #666;
	border-radius: 50%;
}

.shop-icon img {
  width: 100%;
  height: 100%;
}

.shop-scores {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 12px;
  color: #888;
}
</style>