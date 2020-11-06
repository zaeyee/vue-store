<template>
  <div id="cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <scroll class="content" ref="goodsList">
      <div class="placeholder"></div>
      <goods-card v-for="(item,index) in goodsList" :key="index" :goods="item" />
      <div class="placeholder"></div>
    </scroll>
    <div class="submit-bar">
      <checkbox @changeCheck="checkAll">{{allChecked?'全不选':'全选'}}</checkbox>
      <div class="total-price">
        合计:
        <span class="price-symbol">
          <img src="~assets/img/rmb.svg" />
        </span>
        <span class="price-number">29.99</span>
      </div>
      <button class="submit-button">去结算({{goodsList.length}})</button>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import Checkbox from "components/common/checkbox/Checkbox";

import GoodsCard from "./childComps/GoodsCard";

export default {
  data() {
    return {
      allChecked: false,
      goodsList: [
        {
          number: 1,
          message: {
            link: "#",
            image: "http://node.ouzero.com:800/public/store/home/goods/0.webp",
            titleTag: "",
            title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
            price: "35",
            sold: "777"
          }
        },
        {
          number: 1,
          message: {
            link: "#",
            image: "http://node.ouzero.com:800/public/store/home/goods/0.webp",
            titleTag: "",
            title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
            price: "35",
            sold: "777"
          }
        },
        {
          number: 1,
          message: {
            link: "#",
            image: "http://node.ouzero.com:800/public/store/home/goods/0.webp",
            titleTag: "",
            title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
            price: "35",
            sold: "777"
          }
        },
        {
          number: 1,
          message: {
            link: "#",
            image: "http://node.ouzero.com:800/public/store/home/goods/0.webp",
            titleTag: "",
            title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
            price: "35",
            sold: "777"
          }
        },
        {
          number: 1,
          message: {
            link: "#",
            image: "http://node.ouzero.com:800/public/store/home/goods/0.webp",
            titleTag: "",
            title: "秋季女新款宽松格子衬衫+针织背心+中高腰小脚牛仔裤时尚三件套",
            price: "35",
            sold: "777"
          }
        }
      ]
    };
  },
  methods: {
    checkAll(checked) {
      this.allChecked = checked;
      // console.log(this.$refs.goodsList.$children);
      this.$refs.goodsList.$children.forEach(item => {
        item.$refs.checkbox.checkStatus = this.allChecked;
      });
    }
  },
  components: {
    NavBar,
    Scroll,
    Checkbox,
    GoodsCard
  }
};
</script>

<style scoped>
#cart {
  height: 100vh;
}

.cart-nav {
  color: #fff;
  font-size: 16px;
  background: var(--color-high-text);
}

.content {
  height: calc(100% - 141px);
  overflow: hidden;
}

.placeholder {
  height: 1px;
  margin-top: -1px;
}

.submit-bar {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 12px;
  background: #fff;
  box-shadow: 0 -2px 8px #ddd;
}

.total-price {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  font-size: 13px;
  margin: 0 10px;
  line-height: 100%;
}

.price-symbol {
  margin-right: -2px;
  margin-bottom: -2px;
  line-height: 100%;
}

.price-symbol img {
  width: 13px;
  height: 13px;
}

.price-number {
  font-size: 18px;
  font-weight: 700;
  color: var(--color-high-text);
}

.submit-button {
  height: 34px;
  line-height: 34px;
  padding: 0 12px;
  border-radius: 25px;
  color: #fff;
  background: linear-gradient(90deg, var(--color-tint), var(--color-high-text));
}
</style>