<template>
  <div class="signal-text">
    <div class="status">
      <span @click="backClick">取消</span>
      <span @click="save">保存</span>
    </div>
    <textarea
      class="text-box"
      v-model="signalmodel"
      placeholder="写点什么吧..."
      :disabled='textNumber>=30'
    >
    </textarea>
    <div class="impose">
      <span class="writing">{{textNumber}}</span>
      <span>/30</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Signal",

  data() {
    return {
      signalmodel: "",
    };
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    save() {
      this.$store.commit("changetext", this.signalmodel);
      this.$router.back();
    },
  },
  computed: {
    textNumber(){
      return this.signalmodel.length
     
    }
  }
};
</script>
<style scoped>
.signal-text {
  width: 100%;
}
.status {
  width: 100%;
  display: flex;
  /* margin-top: 20px; */
  justify-content: space-between;
  padding: 20px 15px;
  line-height: 60px;
  height: 68px;
  background-color: rgb(245, 245, 245);
}
.status span {
  color: #000;
  font-size: 18px;
}
.status span:last-child {
  color: var(--color-tint);
}
.text-box {
  width: 100%;
  height: 260px;
  padding: 10px;
  font-size: 20px;
  background-color: rgba(245, 239, 239, 0.5);
  outline: 0;
  resize: none;
  border: 0;
}
.impose{
  position: absolute;
  right: 20px;
}
.writing{
  color: var(--color-tint);
  font-size: 17px;
}
.impose span:last-child{
  font-size: 17px;
  font-weight: bold;
}
</style>