<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar",
};
</script>
<style scoped>
#tab-bar {
  display: flex;
  text-align: center;
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  height: 49px;
  background-color: rgb(248, 242, 242);
  box-shadow: 0 -2px 3px rgba(53, 52, 52, 0.3);
}
</style>