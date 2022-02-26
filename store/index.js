export const actions = {
  async nuxtServerInit({ commit }, context) {
    const axiosOptions = {
      method: 'GET',
      url: `${process.env.APP_URL}/api/getGlobalContent`
    }
    await context.$axios(axiosOptions)
      .then(res => {
        commit('global/SET_COMMONELEMENTS', res.data);
      })
      .catch(error => console.log(error));
  }
}
