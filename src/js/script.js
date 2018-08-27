new WOW().init();
// Sliders
$('.reason-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.feedback-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// Fixed menu
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav");
var sticky = nav.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed")
  } else {
    navbar.classList.remove("fixed");
  }
};
// Popup
$('.button').magnificPopup({
  items: {
      src: '#contact-popup',
      type: 'inline'
  }
});
// Animated numbers
var target = $('.numbers');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
var marker = true;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
    if(marker) {
          $('#employees').animationCounter({
      start: 0,
      end: 50,
      delay: 50,
      txt: "+"
    });
    $('#office').animationCounter({
      start: 0,
      end: 4,
      delay: 200
    });
    $('#years').animationCounter({
      start: 0,
      end: 15,
      delay: 100
    });
    marker = false;
    }
  }
});
// Mask
$( "#phone" ).focus(function() {
 $('#phone').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});
// Responsive menu
(function($){
  $(function() {
    $('.nav-icon').on('click', function() {
      $(this).closest('.nav').toggleClass('nav-open');
      $('.nav-icon__burger').toggleClass('hide');
      $('.nav-icon__cross').toggleClass('hide');
    });
    $('.nav-main__item').on('click', function() {
      $(this).closest('.nav').toggleClass('nav-open');
      $('.nav-icon__burger').toggleClass('hide');
      $('.nav-icon__cross').toggleClass('hide');
    });
  });
})(jQuery);