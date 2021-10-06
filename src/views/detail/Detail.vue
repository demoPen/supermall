<template>
  <div id="detail">
    <detail-nav
      class="detail-nav"
      @navClick="navClick"
      ref="navbar"
    ></detail-nav>
    <scroll
      :pull-up-load="true"
      class="content"
      ref="scroll"
      @scrollpull="scrollpull"
      :probeType="3"
    >
      <detail-swiper :topImages="topImages"></detail-swiper>
      <detail-base :goods="goods"></detail-base>
      <detail-base-shop :shop="shops" />
      <detail-shop-info :shop-info="shopdetail"></detail-shop-info>
      <detail-params ref="param" :shop-info="goodsparams"></detail-params>
      <detail-comment ref="comment" :comment="commentInfo"></detail-comment>
      <detail-recommend
        ref="recommend"
        :recommend="recommend"
      ></detail-recommend>
    </scroll>
    <modal tips="添加购物车成功" v-show="isModal"></modal>
    <back-up @click.native="backClick" v-show="isShow"></back-up>
    <detail-bottom-bar @addToCart="addToCart" class="bottomBar"></detail-bottom-bar>
  </div>
</template>
<script>
import DetailNav from "./childcomps/DetailNav.vue";
import DetailSwiper from "./childcomps/DetailSwiper.vue";
import DetailBase from "./childcomps/DetailBase.vue";
import DetailBaseShop from "./childcomps/DetailBaseShop.vue";
import DetailShopInfo from "./childcomps/DetailShopInfo.vue";
import DetailParams from "./childcomps/DetailParams.vue";
import DetailComment from "./childcomps/DetailComment.vue";
import DetailRecommend from "./childcomps/DetailRecommend.vue";
import DetailBottomBar from "./childcomps/DetailBottomBar.vue";
import BackUp from "@/components/content/backup/BackUp.vue";
import Modal from "@/components/common/modal/Modal.vue";
import Scroll from "@/components/content/scroll/Scroll.vue";

import {
  getDetailData,
  Goods,
  Shop,
  GoodsParams,
  getRecommend,
} from "@/network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNav,
    DetailSwiper,
    DetailBase,
    Scroll,
    Scroll,
    DetailBaseShop,
    DetailShopInfo,
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar,
    BackUp,
    Modal,
    Modal
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shops: {},
      shopdetail: {},
      goodsparams: {},
      commentInfo: {},
      recommend: [],
      topY: [0],
      titleIndex: 0,
      isShow: false,
      isModal:false
    };
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
      // 回到顶部
      //这里的意思是拿到这个scroll组件，拿到之后就可以通过它来访问methods里的scollTo（）方法
    },
    navClick(index) {
      // console.log(index);
      //点击时获取各个组件的offsetTop
      this.$nextTick(() => {
        this.topY = [];
        this.topY.push(0);
        this.topY.push(this.$refs.param.$el.offsetTop);
        this.topY.push(this.$refs.comment.$el.offsetTop);
        this.topY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.topY);
      });
      setTimeout(() => {
        //1、点击标题时跳转到每个组件的对应位置
        this.$refs.scroll.scrollTo(0, -this.topY[index], 100);
      });
    },
    scrollpull(position) {
      this.$nextTick(() => {
        this.topY = [];
        this.topY.push(0);
        this.topY.push(this.$refs.param.$el.offsetTop);
        this.topY.push(this.$refs.comment.$el.offsetTop);
        this.topY.push(this.$refs.recommend.$el.offsetTop);
        // console.log(this.topY);
      });

      if (this.topY[1] <= -position.y && -position.y < this.topY[2]) {
        this.titleIndex = 1;
        //  console.log(position.y);
      } else if (
        this.topY[2] - 44 < -position.y &&
        -position.y < this.topY[3]
      ) {
        this.titleIndex = 2;
      } else if (-position.y > this.topY[3] - 44) {
        this.titleIndex = 3;
        // console.log(position.y);
        // console.log(this.topY);
      } else if (0 < -position.y && -position.y < this.topY[1]) {
        this.titleIndex = 0;
      }
      this.$refs.navbar.currentIndex = this.titleIndex;
      // console.log(-position.y);
      -position.y > 1000 ? (this.isShow = true) : (this.isShow = false);
    },
    addToCart(){
      //1、创建购物车对象所需要的数据
      const product = {}
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice;
      product.iid = this.iid;
      product.count = 1
      // product.ischecked = true
     //2、把数据传到购物车里
    
     this.$store.commit('addcart', product);
     //加入的时候显示模态框
     this.isModal = true;
     setTimeout(()=>{
       this.isModal = false;
     },1000)
    }
  },

  created() {
    //1、传入商品的iid
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      //2、获取商品的基本信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //3、获取店铺信息
      this.shops = new Shop(data.shopInfo);
      //4、获取商品详情数据
      this.shopdetail = data.detailInfo;
      //5、获取商品的参数信息
      this.goodsparams = new GoodsParams(
        data.itemParams.info,
        data.itemParams.rule
      );
      //6、获取用户的评论信息
      if (data.rate.cRate !== 0) this.commentInfo = data.rate.list[0];
    });
    getRecommend().then((res) => {
      console.log(res);
      this.recommend = res.data.list;
    });
  },
};
</script>
<style scoped>
#detail {
  /* height: 100vh; */
  position: relative;
  background-color: #fff;
  z-index: 99;
}
.content {
  height: calc(100vh - 44px - 49px);
  /* z-index: 100; */
}
.detail-nav {
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.bottomBar{
  z-index: 5555;
}
</style>