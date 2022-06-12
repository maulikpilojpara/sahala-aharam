$(window).load(function () {
  $("body").addClass("loaded");
})
$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 50) {
    $('html').addClass('sticky');
  } else {
    $('html').removeClass('sticky');
  }
});

Scrollbar.initAll();
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
  $('.main-slider.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
  $('.offer-carousel.owl-carousel').owlCarousel({
    loop: false,
    margin: 20,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 3
      },
      992: {
        items: 4
      }
    }
  });
  $('.category-carousel.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        margin: 20,
        items: 3
      },
      768: {
        margin: 20,
        items: 6
      },
      992: {
        margin: 30,
        items: 7
      },
      1201: {
        margin: 35,
        items: 8
      }
    }
  });
  $('.product-carousel.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        margin: 15,
        items: 1
      },
      768: {
        margin: 20,
        items: 3
      },
      992: {
        margin: 20,
        items: 4
      },
      1201: {
        margin: 20,
        items: 5
      }
    }
  });
  $('.testimonial-carousel.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    margin: 20,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
  });
  $('.certification-carousel.owl-carousel').owlCarousel({
    loop: false,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        margin: 15,
        items: 2
      },
      768: {
        margin: 15,
        items: 5
      },
      992: {
        margin: 15,
        items: 6
      },
      1201: {
        margin: 15,
        items: 7
      }
    }
  });

  $(".clickdown").click(function () {
    $('html,body').animate({
      scrollTop: $(".AboutUs").offset().top
    },
      'slow');
  });

  $('.login-offer-carousel.owl-carousel').owlCarousel({
    loop: true,
    margin: 15,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    animateOut: 'fadeOut',
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });

  $('.details-gallery-carousel.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false
  });

  $('.product-carousel.owl-carousel').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        margin: 15,
        items: 1
      },
      768: {
        margin: 20,
        items: 3
      },
      992: {
        margin: 20,
        items: 4
      },
      1201: {
        margin: 20,
        items: 5
      }
    }
  });

});

window.onscroll = function () { scrollTop() };

function scrollTop() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var myBarElement = document.getElementById("myBar");
  if (myBarElement) {
    myBarElement.style.width = scrolled + "%";
  }
}

// 5. parallax
$(function () { "use strict"; function b() { var b = $(this).outerHeight(), c = b / 2, d = a / 2, e = $(this).offset().top, f = $(window).scrollTop(), g = $(this).attr("data-parallax-speed"), h = e - a, i = e + b, j = e - a, k = c + e - (d + d / 2); h < 0 && (h = 0, i = a); var l = (f - h) / (i - h); l *= 100, l *= g, l = l.toFixed(2); var m = (f - j) / (k - j); m = m.toFixed(2), m >= 1 && (m = 1), $(this).css("background-position", "center " + l + "%") } var a = $(window).height(); $(".parallax").each(b), $(window).on("scroll", function (a) { $(".parallax").each(b) }) });






