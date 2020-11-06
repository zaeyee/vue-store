<template>
  <div class="swiper-wrap">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <ul class="dot-list" v-if="slideNumber > 1">
      <li v-for="(item,index) in slideNumber" :key="index" :style="setDotActive(index)"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 1,
      slideNumber: 0,
      slideWidth: 0,
      startPos: 0,
      distance: 0,
      moveInterval: null
    };
  },
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    moveRatio: {
      type: Number,
      default: 0.2
    },
    animDuration: {
      type: Number,
      default: 500
    },
    dotColor: {
      type: String,
      default: "rgb(255, 255, 255)"
    },
    activeDotColor: {
      type: String,
      default: "rgb(255, 51, 51)"
    }
  },
  methods: {
    // 启动函数
    startSwiper() {
      this.initDom();
      this.slideNumber > 1 && this.autoMove();
    },
    // 初始化dom，并获取必要的数据
    initDom() {
      let swiperEle = this.$refs.swiper;
      let slides = swiperEle.querySelectorAll(".slide");
      this.slideNumber = slides.length;
      this.swiperStyle = swiperEle.style;
      this.slideWidth = swiperEle.offsetWidth;
      if (this.slideNumber > 1) {
        let firstSlide = slides[0].cloneNode(true);
        let lastSlide = slides[this.slideNumber - 1].cloneNode(true);
        // 复制第一个slide到最后面
        swiperEle.appendChild(firstSlide);
        // 复制最后一个slide到最前面
        swiperEle.insertBefore(lastSlide, slides[0]);
        // 先移动到实际上的第一个slide
        this.setTransform(-this.slideWidth);
      }
    },
    // 自动滚动
    autoMove() {
      this.moveInterval = setInterval(() => {
        this.currentIndex++;
        this.swiperMove();
      }, this.interval);
    },
    // 滚动，包括检测第几张，滚动到正确的位置
    swiperMove() {
      this.swiperStyle.transition = `transform ${this.animDuration}ms`;
      this.setTransform(-this.currentIndex * this.slideWidth);
      // 设置一个定时器，过渡时间后执行，判断现在是第几张
      setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex <= 0) {
          this.currentIndex = this.slideNumber;
          this.setTransform(-this.currentIndex * this.slideWidth);
        } else if (this.currentIndex >= this.slideNumber + 1) {
          this.currentIndex = 1;
          this.setTransform(-this.slideWidth);
        }
      }, this.animDuration);
    },
    // 设置滚动transform
    setTransform(pos) {
      this.swiperStyle.transform = `translateX(${pos}px)`;
    },
    // 设置小圆点激活态
    setDotActive(index) {
      if (this.currentIndex >= this.slideNumber + 1) {
        // 最后一张
        return {
          backgroundColor: index == 0 ? this.activeDotColor : this.dotColor
        };
      } else if (this.currentIndex <= 0) {
        // 第一张
        return {
          backgroundColor:
            index == this.slideNumber - 1 ? this.activeDotColor : this.dotColor
        };
      } else {
        return {
          backgroundColor:
            index == this.currentIndex - 1 ? this.activeDotColor : this.dotColor
        };
      }
    },
    //
    touchStart(e) {
      if (this.slideNumber > 1) {
        // 清除定时器，防止手指触摸时继续轮播
        clearInterval(this.moveInterval);
        // 保存触摸后的开始x坐标
        this.startPos = e.touches[0].pageX;
      }
    },
    touchMove(e) {
      if (this.slideNumber > 1) {
        let movePos = e.touches[0].pageX;
        // 保存移动后的x坐标差值 即距离
        this.distance = movePos - this.startPos;
        // 计算移动后swiper需要移动的距离
        let moveDistance =
          -(this.currentIndex * this.slideWidth) + this.distance;
        this.setTransform(moveDistance);
      }
    },
    touchEnd(e) {
      if (this.slideNumber > 1 && this.distance !== 0) {
        // 触摸结束，距离与slide宽度比值，向左移动后结果为负值，反之为正值
        let touchRatio = this.distance / this.slideWidth;
        // 触摸比值与设定的移动比值再求比值
        let ratio = touchRatio / this.moveRatio;
        if (ratio >= 1) {
          // 向右移动，且移动距离比值>=需要移动的比值
          this.currentIndex--;
        } else if (ratio <= -1) {
          // 向左移动，且移动距离比值>=需要移动的比值
          this.currentIndex++;
        }
        // 由于可能触摸到最后一张，需要检测一次
        this.swiperMove();
        // 恢复自动轮播
        this.autoMove();
      }
    }
  },
  mounted() {
    setTimeout(() => {
      this.startSwiper();
    }, 800);
  }
};
</script>

<style scoped>
.swiper-wrap {
  position: relative;
  overflow: hidden;
}

.swiper {
  display: flex;
}

.dot-list {
  position: absolute;
  display: flex;
  left: 50%;
  bottom: 5px;
  transform: translateX(-50%);
}

.dot-list li {
  width: 6px;
  height: 6px;
  margin: 0 3px;
  border-radius: 50%;
}
</style>
