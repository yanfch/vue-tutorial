import * as types from './mutation-types'

export default {
  addTotalTime ({ commit }, time) {
    // commit 执行mutations
    commit(types.ADD_TOTAL_TIME, time)
  },
  decTotalTime ({ commit }, time) {
    commit(types.DEC_TOTAL_TIME, time)
  },
  savePlan ({ commit }, plan) {
    commit(types.SAVE_PLAN, plan)
  },
  deletePlan ({ commit }, idx) {
    commit(types.DELETE_PLAN, idx)
  }
}
