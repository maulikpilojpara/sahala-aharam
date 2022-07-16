const getters = {
  getTestimonials (state) {
    return state?.commonElements?.message?.testimonials || []
  },
  getHomeBestOffers (state) {
    return state?.commonElements?.message?.best_offer || []
  },
  getHomeCertificates (state) {
    return state?.commonElements?.message?.certification || []
  },
  getHomeBanners (state) {
    return state?.commonElements?.message?.banner || []
  },
  getMainCategories (state) {
    console.log('state.commonElements==>. ', state.commonElements);
    return state?.commonElements?.message?.product_group || []
  },
  getHomePopularProducts (state) {
    return state?.commonElements?.message?.popular_product || []
  },
  getHomeRecentProducts (state) {
    return state?.commonElements?.message?.recent_product || []
  },
  getHomeComboBundle (state) {
    return state?.commonElements?.message?.combo_bundle || []
  },
  getHomeWhySahaja (state) {
    return state?.commonElements?.message?.why_sahaja || []
  }
}
export default getters