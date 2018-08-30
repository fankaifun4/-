import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lxLoading:false,
  lxText:"正在加载...."
}

const actions={
  openShap:function({commit},onOff){
    commit('openShap',onOff)
  },
  openText:function({commit},text){
    commit('OPENTEXT',text)
  }
}
const getters={

}
const mutations={
  openShap:function(state,onOff){
    state.lxLoading=onOff
  },
  OPENTEXT:function(state,val){
    state.lxText=val
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

