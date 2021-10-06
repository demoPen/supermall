<template>
  <tab-bar>
    <tab-item path="/home">
      <img slot="item-icon" src="~@/assets/img/tabbar/zhuye.png" alt="" />
      <img
        slot="item-icon-active"
        src="~@/assets/img/tabbar/on-zhuye.png"
        alt=""
      />
      <div slot="item-text">主页</div>
    </tab-item>
    <tab-item path="/category">
      <img slot="item-icon" src="~@/assets/img/tabbar/category.png" alt="" />
      <img
        slot="item-icon-active"
        src="~@/assets/img/tabbar/on-category.png"
        alt=""
      />
      <div slot="item-text">分类</div>
    </tab-item>
    <tab-item path="/cart">
      <img slot="item-icon" src="~@/assets/img/tabbar/gouwuche.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/on-gouwuche.png"
        alt=""
      />
      <div slot="item-text">购物车</div>
    </tab-item>
    <tab-item path="/profile">
      <img slot="item-icon" src="@/assets/img/tabbar/yonghu.png" alt="" />
      <img
        slot="item-icon-active"
        src="@/assets/img/tabbar/on-yonghu.png"
        alt=""
      />
      <div slot="item-text">用户</div>
    </tab-item>
  </tab-bar>
</template>
<script>
import TabBar from "@/components/common/tabbar/TabBar.vue";
import TabItem from "@/components/common/tabbar/TabItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabItem,
  },
};
</script>
<style scoped>
</style>