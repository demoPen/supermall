<template>
<div class="goodlists">
  <goods-list-item v-for="item in goodsdata" :key="item.id" :goodsitem="item"></goods-list-item>
<!-- 再把值传给子组件的GoodsListItem -->
</div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goodsdata:{
      type:Array ||Object,
      default(){
        return []
      }
    }
  }
};
</script>
<style scoped>
.goodlists{
  column-count: 2;
  column-gap: 0;
  background-color: rgb(250, 243, 243);
  /* column-span: none; */
}
</style>