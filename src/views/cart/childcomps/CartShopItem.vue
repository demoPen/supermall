<template>
  <div class="list-item">
    <check-item
      :is-active="product.ischecked"
      @click.native="btnchecked"
    ></check-item>
    <div class="picture">
      <img :src="product.image" alt="" />
    </div>
    <div class="shop-info">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <div class="counter">
        <span>￥{{ product.price }}</span>
        <div class="control">
          <button @click="decrease" :disabled="product.count <= 1">
            <li>-</li>
          </button>
          <i>× {{ product.count }}</i> <button @click="add"><li>+</li></button>
        </div>
      </div>
    </div>
    <!-- {{product}} -->
  </div>
</template>
<script>
import CheckItem from "@/components/content/chicked/CheckItem.vue";
export default {
  name: "CartShopItem",
  data() {
    return {};
  },
  components: {
    CheckItem,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    btnchecked() {
      this.product.ischecked = !this.product.ischecked;
    },
    decrease() {
      if (this.product.count > 1) {
        this.product.count--;
      }
    },
    add() {
      this.product.count++;
    },
  },
};
</script>
<style scoped>
.list-item {
  width: 100%;
  padding: 10px;
  /* border: 1px solid black;
   */
  box-shadow: 0 4px rgb(201, 198, 198);
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 100px; */
}
.list-item .picture {
  width: 100px;
  /* height: 120px; */
  flex: 0.3;
}
.list-item .picture img {
  width: 100%;
  /* height: 120px; */
  border-radius: 5px;
}
.shop-info {
  flex: 0.7;
  margin-left: 10px;
}
.shop-info p {
  text-overflow: ellipsis;
  /* height: 20px; */
  /* display: block; */
  width: 220px;
  line-height: 20px;
  overflow: hidden;
  white-space: nowrap;
  font-weight: bold;
}
.shop-info > p:nth-child(2) {
  margin-top: 20px;
  font-size: 18px;
  display: block;
}
.counter {
  display: flex;
  height: 100px;
  width: 100%;
  align-items: center;
  justify-content: center;
}
.shop-info .counter span {
  font-size: 20px;
  color: var(--color-tint);
  margin-top: 20px;
  flex: 1;
}
.control {
  flex: 1;
  margin-top: 20px;
}
.shop-info .counter i {
  font-size: 20px;
}
button {
  padding: 6px;
  /* border-radius: 50%; */
  line-height: 20px;
  border: 0;
  outline: 0;
  width: 30px;
  height: 20px;
  border-radius: 10px;
  background-color: rgb(219, 203, 203);
}
button li {
  margin-top: -5px;
  display: block;
}
</style>