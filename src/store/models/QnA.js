// import api from '../apiUtil' // db연동용

// 초기값 선언
const stateInit = {
  QnA: {
    id: null,
    text: null,
    createdAt: null,
    updatedAt: null
  }
}

export default {
  state: {
    QnAList: [],
    inputNav: null
  },
  getters: {
    QnAList: state => state.QnAList,
    inputNav: state => state.inputNav
  },
  mutations: {
    setQnAList(state, data) {
      state.QnAList = data
    },
    setinputNav(state, data) {
      state.inputNav = data
    }
  },
  actions: {
    // 리스트 조회
    actQnAList(context, payload) {
      const QnAList = [
        {
          id: 1,
          userid: 'kim',
          title: '번역 부탁드립니다.',
          like: '3',
          commentnum: '2',
          createdAt: '2021-12-01'
        }
      ]
      context.commit('setQnAList', QnAList)
    },
    actinputNav(context, payload) {
      // const inputNav = payload
      context.commit('setinputNav', payload)
    }
  }
}
