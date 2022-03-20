const actions = {
	async updateLoginFlag ({ commit }, flag) {
	    await commit('UPDATE_IS_LOGGED_IN', flag)
	},
	async updateUserContext ({ commit }, data) {
	    await commit('UPDATE_CUSTOMER_CONTEXT', data)
	},  
}
export default actions