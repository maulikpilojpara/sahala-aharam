<template>
  <div class="container">
    <h1 class="mb-4">FAQs</h1>
    <div class="faq-list">
      <div
        v-for="(character, index) in faqData"
        :key="index"
        class="faq-item hidden"
        :data-character-id="index"
      >
        <div class="faq-title" @click="faqItemClick(index)">
          <h6 class="m-0">{{ character.question }}</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
        <div class="faq-detail-wrap">
          <div class="faq-detail">
            <p>{{ character.answer }}</p>
          </div>
        </div>
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
  mounted () {
    this.setAccordionHeight();
  },
  methods: {
    setAccordionHeight () {
      const accordion = document.querySelectorAll('.faq-detail-wrap');
      accordion.forEach((item) => {
        const height = item.querySelector('.faq-detail').offsetHeight;
        item.style.maxHeight = height + 'px';
      });
    },
    faqItemClick (characterIndex) {
      const itemElement = document.querySelectorAll('[data-character-id="' + characterIndex + '"]')[0];
      if (itemElement.classList.contains('block')) {
        itemElement.classList.remove('block')
        itemElement.classList.add('hidden')
        itemElement.children[1].style.maxHeight = '0px'
      } else {
        itemElement.classList.remove('hidden')
        itemElement.classList.add('block')
        itemElement.children[1].style.maxHeight = itemElement.children[1].children[0].scrollHeight + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.faq-list {
  .faq-item {
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    & + .faq-item {
      margin-top: 10px;
    }
    .faq-title {
      cursor: pointer;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .bi-caret-down-fill {
        transition: all 0.3s ease;
        transform: rotate(0deg);
        margin-left: 10px;
      }
      h6 {
        font-size: 16px;
        font-weight: 600;
        color: #333;
      }
    }
    &.block {
      .faq-title {
        .bi-caret-down-fill {
          transform: rotate(180deg);
        }
      }
    }
    .faq-detail-wrap {
      overflow: hidden;
      transition: all 0.5s ease 0s;
    }
    &.hidden {
      .faq-detail-wrap {
        max-height: 0 !important;
      }
    }
    .faq-detail {
      padding: 15px;
      border-top: 1px solid #e6e6e6;
    }
  }
}
</style>
