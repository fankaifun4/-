import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  lxLoading:false,
  lxText:"正在加载....",
  _csrf:""
}

const actions={
  openShap:function({commit},onOff){
    commit('OPENSHAP',onOff)
  },
  openText:function({commit},text){
    commit('OPENTEXT',text)
  },
  setHeader({commit},val){
    commit('SETHEADER',val)
  }
}
const getters={

}
const mutations={
  OPENSHAP:function(state,onOff){
    state.lxLoading=onOff
  },
  OPENTEXT:function(state,val){
    state.lxText=val
  },
  SETHEADER(state,val){
    state._csrf = val
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

