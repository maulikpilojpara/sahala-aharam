<template>
  <div>
    <PageLoader />
    <HeaderInfo />
    <main class="site-main">
      <div class="wrapper">
        <NavSidebar />
        <div class="main-col">
          <Header/>
          <nuxt :key="$route.fullPath" />
          <Footer />
        </div>
      </div>
      <BackToTop />
    </main>
  </div>
</template>

<script>
import PageLoader from '~/components/PageLoader.vue'
import HeaderInfo from '~/components/header/HeaderInfo.vue'
import NavSidebar from '~/components/NavSidebar.vue'
import Header from '~/components/Header.vue'
import $ from 'jquery'

export default {
  mounted() {
    this.$nextTick(() => {
      $(window).scroll(function () {
        var height = $(window).scrollTop();
        if (height > 50) {
          $('html').addClass('sticky');
        } else {
          $('html').removeClass('sticky');
        }
      });
      $(document).ready(function () {
        $(".scrollToTop").click(function (event) {
          event.preventDefault();
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });
        $('.plus-icon').click(function () {
          $('.menu-drodown > ul').slideToggle('slow', function () { });
          $(this).parent().toggleClass('submenu-show');
        });
        $('.header-info-toggle').click(function () {
          $("html").toggleClass("header-info-show");
        });
        $('.header-info-close').click(function () {
          $("html").removeClass("header-info-show");
        });
        $('.header-info-overlay').click(function () {
          $("html").removeClass("header-info-show");
        });

        $('.toggle-menu').click(function () {
          $("html").toggleClass("menu-show");
        });

        $('.o-BClose').click(function () {
          $("html").removeClass("menu-show");
        });
        $('.navbar-nav a').click(function () {
          $("html").removeClass("menu-show");
        });
        $('.custom_close').click(function () {
          $("body").removeClass("custom_show");
        });
        $('.info-btn a').click(function () {
          $(this).parent().parent().toggleClass('show');
        });
        $('#info-box-close').click(function () {
          $(".info-box").removeClass("show");
        });

        $(".form-field-latest .form-control").focus(function(){
          $(this).parent().addClass('input-has-value');
        }).blur(function(){
          $(this).parent().removeClass('input-has-value');
        });
        $('.form-field-latest .form-control').blur(function(){
          if($('.form-field-latest .form-control').val() !='' ) {
            $(this).parent().addClass('input-has-value');
          }else{
            $(this).parent().removeClass('input-has-value');
          }
        });
      });
    });
  },
  components: {
    PageLoader,
    HeaderInfo,
    NavSidebar,
    Header,
    Footer: () => import('~/components/Footer.vue'),
    BackToTop: () => import('~/components/BackToTop.vue')
  },
}
</script>
