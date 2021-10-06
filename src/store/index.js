import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    Cartlist: [],
    signaltext:''
  },
  mutations: {
   changetext(state,payload){
    state.signaltext = payload
   },






    addcart(state, payload) {
      // payload新添加的商品
      // let shopcart = null;
      // for (let item of state.Cartlist){
      //   if(item.iid == payload.iid){
      //     shopcart = item
      //   }
      // };
      // console.log(shopcart);
      // if(shopcart){
      //   shopcart.count +=1;
      // }else {
      //   // shopcart.count =1
      //   state.Cartlist.push(payload)
      // }
      //上面的是第一种方法;

      //第二种方法
      return new Promise((resolve, reject) => {


        let product = state.Cartlist.find(
          item => {
            return item.iid === payload.iid
          }
        );
        if (product) {
          product.count += 1;
          // console.log(product);
        } else {
          // shopcart.count =1
          payload.ischecked = true
          state.Cartlist.push(payload)
        }
      })

    }
  },
  getters: {
    cartlist(state) {
      return state.Cartlist
    }
  },
  actions: {},
  modules: {}
})