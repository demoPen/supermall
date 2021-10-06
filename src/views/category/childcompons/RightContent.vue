<template>
  <div class="main">
    <scroll class="content" :pull-up-load="true" ref="scroll">
      <div class="showdata">
        <div v-for="(item, index) in showdata" :key="index">
          <img v-lazy="item.image" alt="" />
          <span>{{item.title}}</span>
        </div>
      </div>
       <tab-control :title="['销量','流行','新品']"  @controlItem="controlItem"></tab-control>
       <goods-list :goodsdata="datalist"></goods-list>
    </scroll>
  </div>
</template>
<script>
import Scroll from "@/components/content/scroll/Scroll.vue";
import TabControl from "@/components/content/tabcontrol/TabControl.vue";
import GoodsList from "@/components/content/goods/GoodList.vue";
export default {
  name: "",
  props: {
    showdata: {
      type: Array,
      default() {
        return [];
      },
    },
    datalist:{
      type:Array,
      default(){
        return []
      }
    }
  },
   activated () {
    this.$refs.scroll.refresh()
  },
  components: {
    Scroll,
    TabControl,
    GoodsList
  },
  methods: {
    controlItem(index){
     this.$emit("controlItem",index);
    }
  }
};
</script>
<style scoped>
.content {
  height: 100%;
  overflow: hidden;
}
.main {
  width: 100%;
  overflow: hidden;
}
.showdata {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-around; */
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
.showdata div {
  width: 90px;
}
.showdata div img {
  width: 100%;
}
</style>