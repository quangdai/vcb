// js slider home
$(window).bind("load", function() {
    $('.slider .inner-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1
    })
 });

 $(window).bind("load", function() {
    $('.inner-tab-tg').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1024:{
                items:7
            }
        }
    })
 });

 // Tab home

 $('#nav-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })





//   =======================

$(document).ready(function() {
    $(".menu-item").hover(
        function() {
            $(this).children('.mega-menu').stop(true, true).addClass('active');
        },
        function() {
            $(this).children('.mega-menu').stop(true, true).removeClass('active');
        }
    );
    $(".menu-mega-item").hover(
        function() {
            $(this).children('.animate-menu').stop(true, true).addClass('active');
        },
        function() {
            $(this).children('.animate-menu').stop(true, true).removeClass('active');
        }
    );
});