export const state = () => ({
  drawer: false,
  clipped: true,

})

export const mutations = {
  set_drawer(state, newVal) {
    state.drawer = newVal;
  }
}
