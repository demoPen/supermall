<template>
  <div class="modal-tip">
    <div>
      {{tips}}
    <span>(●'◡'●)</span>
    </div>
    
  </div>
</template>
<script>
export default {
  name: "Modal",
  props: {
    tips: {
      type: String,
      default() {
        return "";
      },
    },
  },
};
</script>
<style scoped>
.modal-tip{
  /* height: 80px; */
  width: 150px;
  background-color: rgba(80, 73, 73,.8);
  color: #fff;
  text-align: center;
  /* line-height: 80px; */
  height: 80px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  border-radius: 20px;
}
.modal-tip div{
  margin: 20px auto;
}
.modal-tip div span{
  margin-top: 6px;
  display: block;
}
</style>