<template>
  <div class="show-shop" v-if="Object.keys(shopInfo).length!==0">
    <span>
      {{ shopInfo.desc }}
    </span>
    <div class="shop-key">{{ shopInfo.detailImage[0].key }}</div>
    <div class="shop-img">
      <img
        v-for="(item,index) in shopInfo.detailImage[0].list"
        :key="index"
        :src="item"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.show-shop {
  padding: 30px 10px;
  font-size: 14px;
}
.shop-key {
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}
.shop-img{
  width: 100%;
}
.shop-img img{
  width: 100%;
}
</style>