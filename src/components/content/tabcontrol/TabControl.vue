<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in title"
      :key="item"
      class="control-item"
     
    >
      <span :class="{ active: currentIndex == index }" @click="activeitem(index)">{{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    activeitem(i){
      this.currentIndex = i
      this.$emit('controlItem', i);//发射事件，给home里判断点击的
    }
  }
};
</script>
<style scoped>
.tab-control {
  display: flex;
  font-size: 16px;
  text-align: center;
  /* height: 40px; */
  line-height: 40px;
  background-color: #fff;
  width: 100%;
}
.control-item {
  flex: 1;
}
.control-item span {
  padding: 5px;
  
}
.active{
  color: var(--color-high-text);
  border-bottom: 3px solid var(--color-tint);
}
</style>