<template>
  <div class="checked-button" :class="{activebtn:isActive}">
     <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default {
  name:'CheckItem',
  props: {
    isActive:{
      type:Boolean,
      default(){
        return false
      }
    }
  }
}
</script>
<style scoped>
.checked-button{
  /* background-color: rgb(41, 17, 17); */
  border:1px solid rgb(145, 141, 141);
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 50%;
  text-align: center;
  margin-right: 10px;
  margin-top: 10px;
}
.activebtn{
  background-color:var(--color-tint);
}
</style>