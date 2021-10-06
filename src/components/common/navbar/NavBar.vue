<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
 
  box-shadow: 0px 1px 2px rgba(105, 40, 40, 0.6);
}
.left,
.right {
  width: 15%;
  /* background-color: blue; */
}
.center {
  /* background-color: #fff; */
  flex: 1;
  text-align: center;
  
}
</style>