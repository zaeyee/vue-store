<template>
  <div class="num-seletor">
    <span class="reduce" :class="{disable:this.num<=this.minNumber}" @click="reduce">-</span>
    <span class="number">{{num}}</span>
    <span class="increase" :class="{disable:this.num>=this.maxNumber}" @click="increase">+</span>
  </div>
</template>

<script>
export default {
  props: {
    number: {
      type: Number,
      default: 1
    },
    minNumber: {
      type: Number,
      default: 1
    },
    maxNumber: {
      type: Number,
      default: Infinity
    }
  },
  data() {
    return {
      num: this.number
    };
  },
  methods: {
    reduce() {
      this.num > this.minNumber && this.num--;
      this.$emit("reduce", this.num);
    },
    increase() {
      this.num < this.maxNumber && this.num++;
      this.$emit("increase", this.num);
    }
  },
  components: {}
};
</script>

<style scoped>
.num-seletor {
  display: inline-flex;
}
.reduce,
.increase {
  width: 26px;
  line-height: 20px;
  font-size: 16px;
  font-weight: 700;
  background: #eee;
  text-align: center;
  cursor: pointer;
}
.reduce {
  padding-left: 2px;
  border-radius: 25px 0 0 25px;
}
.increase {
  padding-right: 2px;
  border-radius: 0 25px 25px 0;
}
.reduce.disable,
.increase.disable {
  background: #f6f6f6;
  cursor: not-allowed;
}
.number {
  min-width: 28px;
  padding: 0 6px;
  line-height: 22px;
  font-size: 12px;
  font-weight: 700;
  background: #e6e6e6;
  text-align: center;
}
</style>
