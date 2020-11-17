import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:JSON.parse(sessionStorage.getItem('count'))||{}
  },
  mutations: {
    increment (state,val) {
      state.count.id=val
    }
  }
})

//防止页面刷新vuex中的数据丢失
store.subscribe((mutations,state)=>{
    sessionStorage.setItem('count',JSON.stringify(state.count))
})
export default store