<template>
  <div>
    <nav-bar>
      <div slot="left" @click="homeback">
        <img src='@/assets/img/common/back.svg' alt="" class="homeback">
      </div>
      <div slot="center" class="detailnav" >
        <div v-for="(item,index) in title" 
        :key="item" class="title" 
        @click="titleClick(index)"
        :class="{active:currentIndex===index}"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "@/components/common/navbar/NavBar.vue"
export default {
  name:'DetailNav',
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品','参数','评论','推荐'],
      currentIndex:0
    };
  },
  methods: {
    titleClick(index){
      this.$emit('navClick',index);
      this.currentIndex = index;
      console.log(index);
      console.log(this.currentIndex);
    },
    homeback(){
      this.$router.back()
    }
  }

}
</script>
<style scoped>
.detailnav{
  display: flex;
  font-size: 14px;
  /* background-color: #fff; */
}
.title{
  flex: 1;
}
.active{
  color: var(--color-high-text);
}
.homeback{
  margin-left: 20px;
  margin-top: 12px;

}

</style>