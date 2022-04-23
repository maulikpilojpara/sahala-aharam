<template>
  <div class="container">
    <div
      v-for="(character, index) in faqData"
      :key="index"
    >
      <p class="bg-gray-800 text-white p-6 cursor-pointer" @click="faqItemClick(index)">
        {{ character.question }}
      </p>
      <div :data-character-id="index" class="bg-gray-100 p-6 hidden">
        <p>{{ character.answer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FAQ',
  async asyncData (context) {
    const faqData = await context.store.dispatch('global/getCMSData', 'get_faq');
    return {
      faqData
    }
  },
  methods: {
    faqItemClick (characterIndex) {
      const itemElement = document.querySelectorAll('[data-character-id="' + characterIndex + '"]')[0]
      console.log('itemElement:: ', itemElement);
      if (itemElement.classList.contains('block')) {
        itemElement.classList.remove('block')
        itemElement.classList.add('hidden')
      } else {
        itemElement.classList.remove('hidden')
        itemElement.classList.add('block')
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>