<template>
  <div>
    <div class="base-info" v-if="Object.keys(goods).length !== 0">
      <div class="title">{{ goods.title }}</div>
      <div class="base-price">
        <span class="n-price">{{ goods.newPrice }}</span>
        <span class="o-price">{{ goods.oldPrice }}</span>
        <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
      </div>
      <div class="other-info">
        <span v-for="item in goods.columns" :key="item" class="item-info">{{ item }}</span>
        <span class="item-info">{{
          goods.services && goods.services[goods.services.length - 1].name
        }}</span>
      </div>
      <div class="info-service" v-if="goods.services">
        <span
          class="info-service-item"
          v-for="index in goods.services.length - 1"
          :key="index"
        >
          <img :src="goods.services[index - 1].icon" alt="" />
          <span>{{ goods.services[index - 1].name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBase",
  props: {
    goods: {
      type: Object,
    },
  },
};
</script>
<style scoped>
.base-info {
  padding: 10px;
  width: 100%;
  border-bottom: solid 4px rgba(100, 100, 100, 0.1);
}
.title {
  color: rgb(42, 42, 48);
}
.base-price {
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
}
.n-price {
  color: var(--color-tint);
  font-size: 20px;
  margin-right: 5px;
}
.o-price {
  text-decoration: line-through;
}
.discount {
  background-color: var(--color-tint);
  color: #fff;
  border-radius: 10px;
  padding: 0 5px;
  margin-left: 5px;
  font-size: 13px;
}
.other-info{
  display: flex;
}
.item-info{
  flex: 1;
  font-size: 14px;
}
.info-service{
  display: flex;
  justify-content:space-between;
  font-size: 12px;
  margin-top: 10px;
}

.info-service img{
  width: 12px;
  /* margin-top: 15px; */
}
</style>