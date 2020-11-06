<template>
  <div class="goods-card">
    <checkbox class="goods-checkbox" ref="checkbox" />
    <div class="goods-image">
      <img :src="goods.message.image" />
    </div>
    <div class="goods-content">
      <div class="goods-title">{{goods.message.title}}</div>
      <div class="goods-type">类型类型类型类型类ssssssssssssssssssssss型类型类型类型类型类型类型类型类型类型类型</div>
      <div class="goods-more">
        <span class="goods-price">￥{{goods.message.price}}</span>
        <num-seletor :number="goods.number" />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "components/common/checkbox/Checkbox";

import NumSeletor from "components/content/numSeletor/NumSeletor";

export default {
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  components: {
    Checkbox,
    NumSeletor
  }
};
</script>

<style scoped>
.goods-card {
  display: flex;
  padding: 8px;
  margin: 8px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px #f4f4f4;
}
.goods-checkbox {
  margin-left: 2px;
  margin-right: 8px;
}
.goods-image {
  flex: none;
  width: 86px;
  height: 86px;
  border-radius: 4px;
  box-shadow: 0 2px 4px #dcdcdc;
  overflow: hidden;
}
.goods-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.goods-content {
  flex: 1;
  margin-left: 10px;
}
.goods-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  font-size: 13px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
.goods-type {
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  color: #555;
  font-size: 11px;
  margin: 3px 0;
  padding: 2px 8px;
  background: #ededed;
  border-radius: 25px;
  overflow: hidden;
  word-break: break-all;
  text-overflow: ellipsis;
}
.goods-more {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.goods-price {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-high-text);
}
</style>
