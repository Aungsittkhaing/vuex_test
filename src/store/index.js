// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    // Your state variables go here
    title : "Code Lab",
    fruits: ["apple", "orange", "mango", "banana"],
    name: "Aung Sitt Khaing",
    user: [
      {
        id : 1,
        name : "zaw zaw",
        job : "developer",
        isDone : false
      },
      {
        id : 2,
        name : "kyaw kyaw",
        job : "designer",
        isDone : true
      },
      {
        id : 3,
        name : "ask",
        job : "PM",
        isDone : false
      },
      {
        id : 4,
        name : "hhn",
        job : "sout pow",
        isDone : true
      },
    ]
  },
  mutations: {
    // Your mutations go here
    changeNameWithMutation : state => state.name = "Mutation Ask",
    changeMutationValue : (state, value) => state.name = value
  },
  actions: {
    // Your actions go here
    changeName: ({state}) => state.name = "update ask",
    changeStateName : ({state}, value) => state.name = value
  },
  getters: {
    // Your getters go here
    getUserCount: state => state.user.length,
    doneJob: state => state.user.filter(x => x.isDone === true),
    unDoneJob: (state, getters) => getters.getUserCount - getters.doneJob.length
  },
});