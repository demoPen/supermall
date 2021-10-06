<template>
  <swiper class="dsw">
    <swiper-item v-for="item in topImages" :key="item">
     
        <img :src="item" alt="" />
      
    </swiper-item>
  </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "@/components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      // isLoad: false,
    };
  },
  methods: {
    // imageLoad(){
    //   if(!this.isLoad){
    //     this.$emit('swiperLoad');
    //     this.isLoad = true
    //   }
    // }
  },
  components: {
    Swiper,
    SwiperItem,
  },
};
</script>
<style scoped>
.dsw {
  height:250px;
  overflow: hidden;
}
.dsw img{
  height: 100%;
}
</style>