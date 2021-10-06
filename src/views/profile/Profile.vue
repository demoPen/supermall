<template>
  <div>
    <div class="head">
      <div class="picture">
        <img src="@/assets/img/profile/my.jpg" alt="" />
      </div>
      <div class="tip">
        <h3>小面瓜</h3>
        <div class="signal" @click="changetext">
          <p>{{ finallytext }}</p>
          <svg
            
            t="1632106965835"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2499"
            width="200"
            height="200"
          >
            <path
              d="M772.177 243.168L642.804 142.194c-6.796-5.34-14.806-7.889-22.816-7.889-11.044 0-21.967 4.855-29.248 14.2l-57.526 74.03-296.369 379.988-22.816 29.127-13.835 185.322c-0.85 10.922 8.01 19.66 18.204 19.66 1.82 0 3.762-0.242 5.704-0.849L401.9 778.257l22.816-29.249 354.016-453.776c12.5-16.14 9.588-39.443-6.554-52.064z m-507.54 428.047l86.41 67.356-93.691 30.341 7.281-97.697z m131.315 27.792l-103.644-80.828 283.019-362.754 47.452-60.924 103.644 80.828-330.47 423.678zM819.63 851.196H466.464c-14.806 0-26.7-11.893-26.7-26.7s11.894-26.7 26.7-26.7H819.63c14.807 0 26.7 11.894 26.7 26.7s-11.893 26.7-26.7 26.7z"
              p-id="2500"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="content">
      <div v-for="(item,index) in InfoList" :key="index" class="listItem">
        <img :src="item.icon" alt="" />
        <h3>{{item.text}}</h3>
        <h4>>></h4>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Profile",
  methods: {
    changetext() {
      this.$router.push("/signal").catch((err) => {});
    },
  },
  computed: {
    finallytext() {
      return this.$store.state.signaltext || this.msg;
    },
  },
  data() {
    return {
      InfoList: [
        {
          icon: require("@/assets/img/profile/address.png"),
          text: "收货地址",
        },
        {
          icon: require("@/assets/img/profile/attention.png"),
          text: "关注店铺",
        },
        {
          icon: require("@/assets/img/profile/deliver.png"),
          text: "待发货",
        },
        {
          icon: require("@/assets/img/profile/evaluate.png"),
          text: "我的评价",
        },
        {
          icon: require("@/assets/img/profile/payment.png"),
          text: "待支付",
        },
      ],
      msg: "点这里可以添加个性签名(●'◡'●)",
    };
  },
};
</script>
<style scoped>
.head {
  display: flex;
  background-color:rgba(255, 129, 152,.5);
  
}
.picture {
  width: 100px;
  height: 100px;
  padding: 10px;
}
.picture img {
  width: 100%;
  border-radius: 50%;
}
.tip {
  /* display: inline-block; */
  margin-top: 15px;
}
.tip h3 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  color: #000;
}
.tip svg {
  height: 30px;
  width: 30px;
  display: inline;
}
.signal {
  display: flex;
}
.signal p {
  /* line-height: 30px; */
  margin-top: 10px;
  width: 220px;
  color: rgb(128, 133, 127);
}
.content{
  padding: 0 10px;
  margin-top: 20px;
}
.listItem{
  display: flex; 
  padding: 10px;
  border-bottom: 2px solid rgb(199, 193, 193);
}
.listItem img{
  width: 28px;
 margin-right: 10px;
}
.listItem h3{
  flex: 1;
  padding-top: 5px;
  font-size: 16px;
}
.listItem h4{
  /* flex: 1; */
  padding-top: 5px;
}
</style>