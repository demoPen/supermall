<template>
<div class="recommend">
<good-list :goodsdata="recommend"></good-list>
</div>
</template>
<script>
import GoodList from "@/components/content/goods/GoodList.vue";
export default {
  name: "DetailRecommend",
  props: {
    recommend: {
      type: Array,
    },
  },
  components: {
    GoodList
  }
};
</script>
<style scoped>
</style>