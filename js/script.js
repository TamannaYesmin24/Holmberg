// review part start
$('.review-slider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    dots: true,
    arrows: false,
  });

// review part end

// sticky menu start
$(function(){

    // sticky menu start
  $(window).scroll(function () {
    var sticky = $(this).scrollTop()
    //this is for sticky menu
    if (sticky > 50) {
      $(".menu").addClass("sticky-menu")
    } else {
      $(".menu").removeClass("sticky-menu")
    }
    //this is for sticky menu padding
    if (sticky > 50) {
      $(".navbar-brand").addClass("scroll-logo")
    } else {
      $(".navbar-brand").removeClass("scroll-logo")
    }
  });
  // sticky menu end
});
// sticky menu end

// custom mobile menu-bar start
let mobile_menu = document.getElementById("mobile-menu");
let bars = document.querySelector(".bars");
let line_one = document.querySelector(".line-one");
let line_two = document.querySelector(".line-two");
let line_three = document.querySelector(".line-three");



bars.addEventListener("click", function (){
  mobile_menu.classList.toggle("slide-menu")
  line_one.classList.toggle("close-line1")
  line_two.classList.toggle("close-line2")
  line_three.classList.toggle("close-line3")
})
// custom mobile menu-bar end