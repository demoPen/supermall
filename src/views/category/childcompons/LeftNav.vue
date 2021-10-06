<template>
<div class="main-root">

  <!-- <scroll :pull-up-load=false class="listnav"> -->
    <ul>
      <li
        v-for="(item, index) in categorylist"
        :key="index"
        @click="leftClick(index)"
        :class="{ active: currentIndex === index }"
      >
        {{ item.title }}
      </li>
    </ul>
  <!-- </scroll> -->
</div>
</template>
<script>
import Scroll from "@/components/content/scroll/Scroll.vue";
export default {
  name: "LeftNav",
  data() {
    return {
      currentIndex: 0,
    };
  },
  components: {
    Scroll,
  },
  props: {
    categorylist: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    leftClick(index) {
      // console.log(index);
      this.currentIndex = index;
      this.$emit('listshop', index);
    },
  },
};
</script>
<style scoped>
/* .listnav{
  height: 100%;
  overflow: hidden;

} */
ul {
  height: 100%;
  width: 80px;
  text-align: center;
  background-color: rgb(218, 211, 211);
  /* color: #fff; */
  overflow: scroll;
}
ul li {
  height: 50px;
  line-height: 50px;
  /* width: 50px; */
  border-bottom: 1px solid rgb(161, 156, 156);
}
.active {
  color: var(--color-tint);
  font-weight: bold;
}
</style>