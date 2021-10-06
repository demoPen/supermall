<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";
import ObserveImage from "@better-scroll/observe-image";
import Pullup from "@better-scroll/pull-up";
BScroll.use(Pullup);
BScroll.use(ObserveImage);
BScroll.use(ObserveDOM);
export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    //1、创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //实例化BScroll
      click: true,
      observeDOM: true,
      observeImage: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      //  preventDefault: false
    });

    //2、监听滚动的位置
    this.scroll.on("scroll", (position) => {
      // console.log(position.y);
      this.$emit("scrollpull", position);
      // console.log(this.scroll);
    }),
      //3、监听上拉加载更多事件
      this.scroll.on("pullingUp", () => {
        // console.log('上拉加载');
        this.$emit("pulling");
        //  await fetchData();
        this.scroll.finishPullUp();
      });
    // console.dir(this.scroll);
  },
  methods: {
    scrollTo(x, y, time = 1000) {
      //
      this.scroll.scrollTo(x, y, time); //scrollTo是scroll里的方法，用于回到顶部
    },
    refresh() {
      this.scroll.refresh();
    },
  },
};
</script>
<style scoped>
</style>