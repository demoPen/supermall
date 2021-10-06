<template>
  <div class="shop-params">
    <table v-if="shopInfo.sizes" border="0"  cellspacing='0'>
      <tr v-for="(item,i) in shopInfo.sizes[0]" :key="i" >
        <td v-for='(tds,index) in item' :key="index">{{tds}}</td>
      </tr>
    </table>
    <table border="0" cellspacing='0' cellpadding=200>
      <tr v-for="(it,s) in shopInfo.infos" :key="s">
        <td>{{it.key}}</td>
        <td class="td-right" :style="{color:'var(--color-tint)'}">{{it.value}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name:"DetailParams",
  props: {
    shopInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  // 动态加载
  // watch: {
  //   shopInfo(news){
  //  console.log(news);
  //   }
  // }
}
</script>
<style scoped>
.shop-params{
  padding: 20px 20px;
}
table{
  width: 100%;
  border:0;
  
  /* text-align: center; */
}
.shop-params td{
  border-bottom:2px solid rgba(211, 205, 205,.5);
  height: 30px;
  padding: 10px;
}
.td-right{
 width: 70%;
}
</style>