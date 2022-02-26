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
  }
}
export default getters