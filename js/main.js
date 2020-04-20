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

// Js dropdown list category

$(document).ready(function(){
    $("button").click(function(){
      $("p").toggle();
    });
});
