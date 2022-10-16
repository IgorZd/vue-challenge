import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
    people: [],
  },
  mutations: {
    savePeople(state, people) {
      state.people = people;
    },
  },
  actions: {
    getPeople(context) {
      fetch('https://run.mocky.io/v3/8aabb2ec-21c0-42c0-815c-0d748b775734')
        .then((response)=>{
          return response.json();
        })
        .then((people)=>{
          context.commit('savePeople', people);
        });
    },
  },
});
