<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="category-list">
      <scroll class="categories">
        <cate-tab :categories="categories" @changeCategory="changeCategory" />
      </scroll>
      <scroll class="child-categories">
        <cate-content :childCategories="currentChildCategories" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";

import CateTab from "./childComps/CateTab";
import CateContent from "./childComps/CateContent";

import { getCategory } from "network/category";

export default {
  data() {
    return {
      categories: [],
      childCategories: [],
      currentChildCategories: []
    };
  },
  components: {
    NavBar,
    Scroll,
    CateTab,
    CateContent
  },
  created() {
    this.getCategory();
  },
  methods: {
    // 获取分类数据
    getCategory() {
      getCategory().then(res => {
        if (res.code !== 200) {
          console.log("错误：" + res.data.msg);
          return;
        }
        this.categories = res.data.categories;
        this.childCategories = res.data.childCategories;
        // 初始化当前分类的数据
        this.childCategories.length > 0 &&
          this.changeCategory(this.categories[0].id);
      });
    },
    // 修改分类
    changeCategory(categoryId) {
      this.currentChildCategories = [];
      this.childCategories.forEach((item, index) => {
        item.parentId == categoryId && this.currentChildCategories.push(item);
      });
    }
  }
};
</script>

<style scoped>
#category {
  height: 100vh;
}

.category-nav {
  color: #fff;
  font-size: 16px;
  background: var(--color-high-text);
}

.category-list {
  display: flex;
  height: calc(100% - 93px);
  overflow: hidden;
  background: #fff;
}

.categories {
  background: #f5f5f5;
}

.child-categories {
  flex: auto;
}
</style>
