<template>
  <div class="item-bar" @click="itemClick">
    <!-- <img src="../../assets/img/zhuye.png" alt="">
    <div>首页</div> -->
    <!-- 动态决定的不能写死 ，所以我选择用两个具名插槽来替代-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 上面的两个插槽用于存放用户传过来的两张图片，一张是活跃的 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {
      // isActive:true
    };
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
      //判断当前活跃的路由等不等于当前路径
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
};
</script>
<style scoped>
.item-bar {
  flex: 1;
}
.item-bar img {
  width: 24px;
  margin-top: 4px;
  vertical-align: middle;
}
</style>