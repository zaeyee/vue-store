<template>
  <div id="mine">
    <mine-head :userInfo="userInfo" />
    <mine-goods />
  </div>
</template>

<script>
import MineHead from "./childComps/MineHead";
import MineGoods from "./childComps/MineGoods";

export default {
  data() {
    return {
      userInfo: {
        headPic: "https://dao.ouzero.com/favicon.ico",
        nickname: "OUZERO",
        collectionNum: 18,
        concernNum: 7,
        couponNum: 4,
        historyNum: 392
      }
    };
  },
  methods: {},
  components: {
    MineHead,
    MineGoods
  }
};
</script>

<style scoped>
</style>