<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="inline-content">
      <left-nav :categorylist="categorylist" @listshop="listshop"></left-nav>
      <right-content
        :showdata="doingdata"
        :datalist="goodsdata[typeIndex]"
        @controlItem="controlItem"
      >
      </right-content>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import LeftNav from "./childcompons/LeftNav.vue";
import RightContent from "./childcompons/RightContent.vue";

import {
  getCategoryInfo,
  getSubCategory,
  getSubCategoryDetail,
} from "@/network/category.js";
export default {
  name: "Category",
  data() {
    return {
      categorylist: [],
      doingdata: [],
      // mainKey: "",
      wallIndex: 0,
      goodsdata: {
        pop: [],
        new: [],
        sell: [],
      },
      typeIndex: "pop",
    };
  },
  created() {
    this.getCategory();
    // this.getSubCategory(this.categorylist[0].maitKey)
  },
  mounted() {
    setTimeout(() => {}, 100);
  },
  components: {
    NavBar,
    LeftNav,
    RightContent,
  },
  methods: {
    controlItem(index) {
      switch (index) {
        case 0:
          this.typeIndex = "pop";
          break;
        case 1:
          this.typeIndex = "new";
          break;
        case 2:
          this.typeIndex = "sell";
          break;
      }
    },

    //点击对应的分类请求对应的数据
    listshop(index) {
      console.log(index);
      this.wallIndex = index;
      this.getSubCategory(index);
      // this.doingdata = this.getSubCategory(this.categorylist[wallIndex].maitKey);
    },

    getCategory() {
      getCategoryInfo().then((res) => {
        // console.log(res);
        this.categorylist = res.data.category.list;
        this.getSubCategory(this.wallIndex);
      });
    },
    getSubCategory(index) {
      const maitKey = this.categorylist[index].maitKey;
      getSubCategory(maitKey).then((res) => {
        this.doingdata = res.data.list;
        this.getSubCategoryDetail("pop");
        this.getSubCategoryDetail("new");
        this.getSubCategoryDetail("sell");
      });
    },
    getSubCategoryDetail(type) {
      const wallkey = this.categorylist[this.wallIndex].miniWallkey;
      getSubCategoryDetail(wallkey, type).then((res) => {
        // console.log(res);
        this.goodsdata[type] = res;
      });
    },
  },
 
};
</script>
<style scoped>
#category {
  padding-top: 44px;
}
.nav-bar {
  color: #fff;
  background-color: var(--color-tint);
  /* z-index: 126; */
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  /* margin-bottom: 44px; */
  /* overflow: hidden; */
  /* text-align: center; */
}
.inline-content {
  display: flex;
  height: calc(100vh - 44px - 49px);
}
</style>