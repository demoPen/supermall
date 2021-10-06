<template>
  <div class="shop-info">
    <div class="store">
      <img :src="shop.logo" alt="" />
      <span class="text">{{ shop.name }}</span>
    </div>
    <div class="detail-sell">
      <div class="left-sell">
        <div>
          <p>{{ shop.sells | bigNumberTransform }}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{ shop.goodsCount }}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="sell-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td
              :style="
                item.isBetter
                  ? { color: 'var(--color-tint)' }
                  : { color: 'green' }
              "
            >
              {{ item.score }}
            </td>
            <td
              :style="
                item.isBetter
                  ? { color: '#fff', background: 'var(--color-tint)' }
                  : { color: '#fff', background: 'green' }
              "
            >
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <p class="going">
      <span>进店逛逛</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "DetailBaseShop",
  props: {
    shop: {
      type: Object,
    },
  },
  filters: {
    bigNumberTransform(value) {
      const newValue = ["", "", ""];
      let fr = 1000;
      let num = 3;
      let text1 = "";
      let fm = 1;
      while (value / fr >= 1) {
        fr *= 10;
        num += 1;
        // console.log('数字', value / fr, 'num:', num)
      }
      if (num <= 4) {
        //千
        newValue[1] = "千";
        newValue[0] = parseInt(value / 1000) + "";
      } else if (num <= 8) {
        //万
        text1 = parseInt(num - 4) / 3 > 1 ? "千万" : "万";
        fm = "万" === text1 ? 10000 : 10000000;
        newValue[1] = text1;
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + "";
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + "";
        }
      } else if (num <= 16) {
        //亿
        text1 = (num - 8) / 3 > 1 ? "千亿" : "亿";
        text1 = (num - 8) / 4 > 1 ? "万亿" : text1;
        text1 = (num - 8) / 7 > 1 ? "千万亿" : text1;

        fm = 1;
        if ("亿" === text1) {
          fm = 100000000;
        } else if ("千亿" === text1) {
          fm = 100000000000;
        } else if ("万亿" === text1) {
          fm = 1000000000000;
        } else if ("千万亿" === text1) {
          fm = 1000000000000000;
        }
        newValue[1] = text1;
        if (value % fm === 0) {
          newValue[0] = parseInt(value / fm) + "";
        } else {
          newValue[0] = parseFloat(value / fm).toFixed(2) + "";
        }
      }
      if (value < 1000) {
        newValue[1] = "";
        newValue[0] = value + "";
      }
      return newValue.join("");
    },
  },
};
</script>
<style scoped>
.shop-info {
  padding: 30px 10px;
  border-bottom: solid 4px rgba(100, 100, 100, 0.1);
}
.store {
  overflow: hidden;
}

.store img {
  width: 48px;
  border-radius: 50%;
  margin-top: 5px;
  float: left;
  border: 1px solid rgb(223, 215, 215);
}
.store .text {
  float: left;
  margin-top: 20px;
  margin-left: 10px;
  font-size: 14px;
  /* display: block; */
}
.detail-sell {
  display: flex;
}
.detail-sell div {
  flex: 1;
}
.detail-sell .left-sell {
  width: 50%;
  display: flex;
  padding-top: 20px;
  border-right: 1px solid rgb(231, 224, 212);
}
.detail-sell .left-sell > div {
  flex: 1;
  text-align: center;
}
.detail-sell .left-sell > div p:last-child {
  font-size: 12px;
  margin-top: 9px;
}
.detail-sell .left-sell > div p:first-child {
  font-size: 15px;
  font-weight: bold;
}
.detail-sell .sell-right {
  font-size: 12px;
  text-align: center;
}
table {
  width: 100%;
  padding: 0 20px;
}
table tr {
  height: 20px;
  line-height: 20px;
}
.going {
  text-align: center;
  margin-top: 20px;
}
.going span {
  padding: 5px 10px;
  color: rgb(157, 165, 172);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(161, 155, 155);
  border-radius: 10px;
}
</style>