<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ $store.state.Cartlist.length }})</div>
    </nav-bar>
    <scroll class="contents" :pull-up-load= 'true' ref="scroll">
      <cart-shop></cart-shop>
    </scroll>
    <cart-total></cart-total>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import Scroll from "@/components/content/scroll/Scroll.vue";
import CartShop from "./childcomps/Cartshop.vue";
import CartTotal from "./childcomps/CartTotal.vue"

import {mapGetters} from "vuex"
export default {
  name: "Cart",
  components: {
    NavBar,
    Scroll,
    CartShop,
    CartTotal
  },
  activated () {
    this.$refs.scroll.refresh()
  }
 
};
</script>
<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
.contents{
  height: calc(100vh - 44px - 40px );
  overflow: hidden;
}
</style>