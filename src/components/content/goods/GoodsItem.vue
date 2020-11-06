<template>
  <div class="goods-item" @click="itemClick">
    <div class="goods-item-image">
      <img :src="goodsItem.image" @load="imageLoad" />
    </div>
    <div class="goods-item-text">
      <p class="goods-item-title">{{goodsItem.title}}</p>
      <div class="goods-item-info">
        <div class="goods-item-price">
          <span class="price-symbol">
            <img src="~assets/img/rmb.svg" />
          </span>
          <span class="price-number">{{goodsItem.price}}</span>
        </div>
        <div class="goods-item-sold">已售{{goodsItem.sold}}件</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad() {
      this.$bus.$emit("goodsImageLoad");
    },
    itemClick() {
      this.$router.push("/detail/" + this.goodsItem.id);
    }
  },
  components: {}
};
</script>

<style scoped>
.goods-item {
  flex-basis: calc(50% - 12px);
  display: flex;
  flex-direction: column;
  color: #333;
  background: #fff;
  margin: 4px;
  border-radius: 8px;
  box-shadow: 0 0 10px #ddd;
  overflow: hidden;
}

.goods-item-image {
  font-size: 0;
  width: 100%;
}

.goods-item-image img {
  width: 100%;
}

.goods-item-text {
  padding: 8px;
}

.goods-item-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 14px;
  overflow: hidden;
}

.goods-item-info {
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.goods-item-price {
  color: var(--color-high-text);
  font-weight: 700;
  font-size: 18px;
}

.price-symbol {
  margin-right: -2px;
}

.price-symbol img {
  width: 13px;
  height: 13px;
}

.goods-item-sold {
  font-size: 11px;
  color: #888;
}
</style>
