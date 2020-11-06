<template>
  <div class="goods-info">
    <div class="row-wrap">
      <div class="goods-price">
        <span class="price-symbol">
          <img src="~assets/img/rmb.svg" />
        </span>
        <span class="price-number">{{baseInfo.price}}</span>
      </div>
      <div class="goods-sold">已售{{baseInfo.sold}}件</div>
    </div>
    <div class="goods-title">{{baseInfo.title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    baseInfo: {
      type: Object
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style scoped>
.goods-info {
  padding: 10px 14px;
  background: #fff;
  margin-bottom: 6px;
  border-radius: 8px;
  box-shadow: 0 0 10px #eee;
}

.row-wrap {
  display: flex;
  align-items: center;
}

.goods-price {
  flex: 1;
  color: var(--color-high-text);
  font-weight: 700;
  font-size: 22px;
}

.price-symbol {
  margin-right: -2px;
}

.price-symbol img {
  width: 13px;
  height: 13px;
}

.goods-sold {
  color: #888;
  font-size: 13px;
}

.goods-title {
  margin-top: 8px;
  font-size: 16px;
  color: #333;
}
</style>