<template>
  <div class="total-cart">
    <div class="btn-checked">
      <check-item
        :is-active="btnclick"
        @click.native="toggleClass"
      ></check-item>
      <span>全选</span>
    </div>
    <div class="all">
      <span>合计: </span>
      <span>￥{{ totalprice }}</span>
    </div>
    <div class="payment">去计算 ({{ paymentNum }})</div>
  </div>
</template>
<script>
import CheckItem from "@/components/content/chicked/CheckItem.vue";
export default {
  name: "CartTotal",
  data() {
    return {
      // isClick:true
    };
  },
  components: {
    CheckItem,
  },
  methods: {
    toggleClass() {
      if (this.btnclick) {
        for (let item of this.$store.state.Cartlist) {
          item.ischecked = false;
          console.log(item);
        }
      } else {
        for (let item of this.$store.state.Cartlist) {
          item.ischecked = true;
        }
      }
    },
  },
  computed: {
    totalprice() {
      return this.$store.state.Cartlist.filter((item) => {
        return item.ischecked;
      })
        .reduce((pre, value) => {
          return pre + value.price * value.count;
        }, 0)
        .toFixed(2);
    },
    paymentNum() {
      return this.$store.state.Cartlist.filter((item) => {
        return item.ischecked;
      }).length;
    },
    btnclick() {
      //判断是否全选按钮是否选中
      if (this.$store.state.Cartlist.length == 0) return false;
      let test = this.$store.state.Cartlist.every((item) => {
        return item.ischecked == true;
      });
      return test;
    },
  },
};
</script>
<style scoped>
.total-cart {
  height: 40px;
  background-color: rgb(255, 255, 255);
  display: flex;
  position: relative;
  bottom: 49px;
  line-height: 40px;
}
.all {
  flex: 1;
}
.all {
  padding-left: 20px;
}
.btn-checked {
  padding-left: 5px;
  width: 70px;
  display: flex;
}
.payment {
  background-color: rgb(187, 78, 15);
  color: #fff;
  width: 80px;
  text-align: center;
}
</style>