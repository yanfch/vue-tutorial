import * as types from './mutation-types'

export default {
  // 改变的方法名
  [types.ADD_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime + time
  },

  [types.DEC_TOTAL_TIME] (state, time) {
    state.totalTime = state.totalTime - time
  },

  [types.SAVE_PLAN] (state, plan) {
    const images = 'https://apic.douyucdn.cn/upload/avanew/face/201701/05/00/6eb42abae5492dc1e1ee30ec5d611bc7_middle.jpg?rltime'
    state.list.push(Object.assign({name: 'yanfch', avatar: images}, plan))
  },

  [types.DELETE_PLAN] (state, idx) {
    state.list.splice(idx, 1)
  }
}
