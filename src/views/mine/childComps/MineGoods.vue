<template>
  <div class="cell-panel">
    <div class="cell">
      <div class="cell-icon">
        <img src="~assets/img/mine/pay.svg" />
      </div>
      <div class="cell-text">待付款</div>
    </div>
    <div class="cell">
      <div class="cell-icon">
        <img src="~assets/img/mine/deliver.svg" />
      </div>
      <div class="cell-text">待收货</div>
    </div>
    <div class="cell">
      <div class="cell-icon">
        <img src="~assets/img/mine/comment.svg" />
      </div>
      <div class="cell-text">待评价</div>
    </div>
    <div class="cell">
      <div class="cell-icon">
        <img src="~assets/img/mine/refund.svg" />
      </div>
      <div class="cell-text">退换/售后</div>
    </div>
    <div class="cell all-form">
      <div class="split-line"></div>
      <div class="cell-icon">
        <img src="~assets/img/mine/form.svg" />
      </div>
      <div class="cell-text">全部订单</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped>
.cell-panel {
  display: flex;
  width: calc(100% - 16px);
  margin: auto;
  padding: 5px 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 10px #ddd;
}
.cell {
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 8px;
}
.cell-icon {
  width: 25px;
  height: 25px;
}
.cell-icon img {
  width: 100%;
  height: 100%;
}
.cell-text {
  font-size: 12px;
  margin-top: 3px;
}
.split-line {
  position: absolute;
  top: 15%;
  left: 0;
  width: 1px;
  height: 70%;
  background: #ddd;
}
.split-line::before {
  content: "";
  position: absolute;
  top: calc(50% - 5px);
  left: 0;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent transparent #ddd;
}
.split-line::after {
  content: "";
  position: absolute;
  top: calc(50% - 3px);
  left: 0;
  border-width: 3px;
  border-style: solid;
  border-color: transparent transparent transparent #fff;
}
</style>