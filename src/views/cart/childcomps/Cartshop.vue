<template>
  <div class="cartlist">
    <cart-shop-item v-for="(item,index) in cartlist" :key="index" :product='item'>
      
    </cart-shop-item>
  </div>
</template>
<script>
import CartShopItem from "./CartShopItem.vue";
import {mapGetters} from "vuex"
export default {
  name: "Cartshop",
  components: {
    CartShopItem,
  },
   computed: {
    ...mapGetters(
      ['cartlist']
    )
  },
 
};
</script>
<style scoped>
</style>