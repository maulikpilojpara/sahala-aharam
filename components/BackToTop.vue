<template>
  <a href="javascript:void(0)" class="scrollToTop"
    ><svg
      width="18"
      height="24"
      viewBox="0 0 18 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.396776 9.26866L0.88446 9.70454C1.2077 9.99341 1.7318 9.99341 2.05511 9.70454L7.81102 4.53087L7.81102 22.3913C7.81102 22.7998 8.18165 23.131 8.63877 23.131L9.32856 23.131C9.78569 23.131 10.1563 22.7998 10.1563 22.3913L10.1563 4.53087L15.9122 9.70454C16.2355 9.99341 16.7596 9.99341 17.0829 9.70454L17.5706 9.26866C17.8938 8.97979 17.8938 8.51142 17.5706 8.22255L9.56896 1.04192C9.24572 0.753059 8.72162 0.753059 8.39831 1.04192L0.396776 8.22256C0.0734697 8.51142 0.0734697 8.97979 0.396776 9.26866Z"
        fill="white"
      />
    </svg>
  </a>
</template>

<script>
export default {
  name: 'BackToTop',
};
</script>

<style scoped>
.scrollToTop {
  position: fixed;
  right: 0;
  bottom: -100px;
  opacity: 0;
  width: 36px;
  height: 36px;
  background: var(--primary);
  color: #fff;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 90px 30px;
  transition: all 0.5s;
  z-index: 9;
  padding: 12px;
}

.scrollToTop:hover {
  background: var(--dark);
}

.sticky .scrollToTop {
  bottom: 0;
  opacity: 1;
}
</style>
