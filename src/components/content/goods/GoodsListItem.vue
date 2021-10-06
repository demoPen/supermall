<template>
  <div class="item" @click="itemClick">
    <img v-lazy="showImage" alt="" />
    <div class="info">
      <p>{{ goodsitem.title }}</p>
      <div class="info-item">
        <span class="price">￥{{ goodsitem.price }}</span>
        <span class="cfav">{{ goodsitem.cfav }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsitem.image || this.goodsitem.img || this.goodsitem.show.img ;
    },
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf("detail") == -1) {
        this.$router.push("/detail/" + this.goodsitem.iid); //传过去的id号
      } else {
        alert("商品过期");
      }
    },
  },
};
</script>
<style scoped>
.item {
  position: relative;
  background-color: #fff;
  padding: 10px;
  white-space: nowrap;
  /* width: 45%; */
  /* text-align: center; */

  box-sizing: border-box;
  border-radius: 5px;
  margin: 8px;
  /* border: 1px solid black; */
  overflow: hidden;
  box-decoration-break: clone;
  -wibkit-box-decoration-break: clone;
}
.item img {
  width: 100%;
  border-radius: 4px;
}
.item p {
  font-size: 12px;
  margin-bottom: 4px;
  width: 130px;
  overflow: hidden;
  letter-spacing: 1px;
  text-overflow: ellipsis;
}
.info {
  margin-top: 10px;
}
.cfav {
  position: relative;
  margin-left: 30px;
  text-align: right;
}
.info-item .cfav::before {
  display: block;
  background: url(~@/assets/img/common/collect.svg) 0 0/14px 14px;
  position: absolute;
  width: 14px;
  height: 14px;
  top: 1px;
  left: -14px;
  content: "";
}
.price {
  color: var(--color-tint);
  /* position: absolute; */
  /* left: 20px; */
  text-align: left;
}
</style>