<template>
  <!-- 推荐模块 -->
  <div class="rec">
    <div v-for="item in recommends" :key="item.id" class="home-rec">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="reload"/>
        <div>{{ item.title }}</div></a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeRe",
  props: {
    recommends: {
      type: Array,
      defaults() {
        return [];
      },
    },
  },
  data() {
    return {
      isLoad: false,
    };
  },
  methods: {
     reload(){
      if(!this.isLoad){
        this.$emit('reload');
        // console.log('88');
        this.isLoad = true
      }
    }
  }
};
</script>
<style scoped>
.rec {
  display: flex;
  text-align: center;
  padding-bottom: 30px;
  border-bottom: 20px solid rgba(219, 214, 214, 0.2);
}
.rec img {
  height: 60px;
  margin: 10px 0;
}
.home-rec {
  flex: 1;
}
</style>