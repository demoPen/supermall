<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
      <tab-control
        :title="['流行', '新款', '精选']"
        @controlItem="controlItem"
        ref="tabcontroltop"
        class ='tab'
        v-show="isFixed"
      ></tab-control>
    <scroll
      class="contents"
      ref="scrolltop"
      :probe-type="3"
      @scrollpull="scrollcontent"
      :pull-up-load='true'
      @pulling="loadmore"
    >
      <home-swiper :banners="banner" @swiperLoad ='swiperLoad'></home-swiper>
      <home-re :recommends="recommend" @reload ="reloads"></home-re>
      <feature-view @onceload ="onceload"></feature-view>
      <tab-control
        :title="['流行', '新款', '精选']"
        @controlItem="controlItem"
        ref="tabcontrol"
      ></tab-control>
      <goods-list :goodsdata="goods[controlIndex].list"></goods-list>
    </scroll>
    <back-up @click.native="backClick" v-show="isShow"></back-up>
    <!-- 组件上监听事件用.native修饰符，平常我们在监听事件都是在元素标签上的，但是这里回到顶部是一个组件 -->
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import HomeSwiper from "./ChildrenComponents/HomeSwiper.vue";
import TabControl from "@/components/content/tabcontrol/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodList.vue";
import Scroll from "@/components/content/scroll/Scroll.vue";
import BackUp from "@/components/content/backup/BackUp.vue";

//局部组件
import HomeRe from "./ChildrenComponents/HomeRe.vue";
import FeatureView from "./ChildrenComponents/FeatureView.vue";
import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    TabControl,
    GoodsList,
    Scroll,
    HomeRe,
    FeatureView,
    Scroll,
    BackUp,
    BackUp,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      controlIndex: "pop",
      isShow: false, //默认不显示回到顶部
      offsetTop : 0,
      isFixed:false,
      reoffsetTop:0,
      feoffsetTop:0,
      saveY:0,//记录scroll滑动的值
    };
  },
  created() {
    //请求多个数据
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  activated () {
    this.$refs.scrolltop.refresh()
    this.$refs.scrolltop.scrollTo(0,this.saveY,0)//保存位置
  },
  deactivated () {
    this.saveY = this.$refs.scrolltop.scroll.y
    // console.log(this.saveY);
  },
  destroyed () {
    console.log('homede');
  },
  computed: {
    totalTop(){
       return this.offsetTop 
    }
  },
  methods: {
    //事件监听
    controlItem(index) {
      //根据传过来的index的值来动态判断点击获取数据
      switch (index) {
        case 0:
          this.controlIndex = "pop";
          break;
        case 1:
          this.controlIndex = "new";
          break;
        case 2:
          this.controlIndex = "sell";
          break;
      }
      this.$refs.tabcontrol.currentIndex = index
      this.$refs.tabcontroltop.currentIndex = index
    },
    backClick() {
      this.$refs.scrolltop.scrollTo(0, 0);
      // alert('ll')
      //这里的意思是拿到这个scroll组件，拿到之后就可以通过它来访问methods里的scollTo（）方法
    },
    scrollcontent(position) {
      //1、判断回到顶部是否显示
      -position.y > 1000 ? (this.isShow = true) : (this.isShow = false);
      // 2、判断tabcontrol是否吸顶
      this.isFixed = -position.y>this.totalTop
    },
    //加载更多
    loadmore(){
        this.getHomeGoods(this.controlIndex)
    },
    swiperLoad(){
     this.offsetTop = this.$refs.tabcontrol.$el.offsetTop;
    },
    reloads(){
    this.reoffsetTop = this.$refs.tabcontrol.$el.offsetTop
  
    },
    onceload(){
    this.feoffsetTop = this.$refs.tabcontrol.$el.offsetTop
  
    },

    //网络请求，我在home里的create()钩子里使用了
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        // console.log(res);
        this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1; //初始page的页数为0，使page加1
      getHomeGoods(type, page).then((res) => {
        //这个才是home.js里的定义的函数，只不过我和methods里起了同一个名字
        // console.log(res);
        this.goods[type].list.push(...res.data.list); //把数据放在list里面
        this.goods[type].page += 1; //拿到了第一页数据后把加页码，依次累加，把数据放在了data里的goods里
      });
    },
  },
};
</script>
<style scoped>
#home{
  height: 100vh;
  position: relative;
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: white;
  z-index: 9;
  position: fixed;
  top: 0;
  width: 100%;
  right: 0;
  
}
.contents{
  position: absolute;
  left: 0;
  bottom: 49px;
  top: 44px;
  right: 0;
  /* height: calc(100vh - 93px); */
  overflow: hidden;
  
}
.tab{
 /* margin-top: 44px; */
  position: relative;
  z-index: 33;
  /* background-color: #fff; */
}

</style>