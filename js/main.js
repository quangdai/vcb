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
            768:{
                items:4
            },
            1024:{
                items:5
            }
            ,
            1200:{
                items:7
            }
        }
    })
 });
 $(window).bind("load", function() {
    if(window.innerWidth < 1025 && window.innerWidth > 767 ){
        $('.tab-content .inner-tab ').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            dots:false,
            nav:true,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive:{
                0:{
                    items:1
                },
                568:{
                    items:2, 
                    nav:true,
                    autoplay:false,
                },
                768:{
                    items:3, 
                    nav:true,
                    autoplay:false,
                },
                1024:{
                    items:3,
                    nav:true,
                }
            }
        })
    }
 });
 
//
 $(document).ready( function() {
    if(window.innerWidth <  1025 && window.innerWidth > 767 ){
        $('.news-home .inner-tab').addClass( 'owl-carousel' );
    }
  } );

 // Tab home

 $('#nav-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

// List category

$(window).bind('load', function(){
    $(".multi-cat li.has-child i").on('click', function(){
        $(this).siblings(".sub-cat").toggle(200);
    });

    $(".sub-cat li.has-child i").on('click', function(){
        $(this).siblings(".sub-cat-child").toggle(200);
    });
});

//   =======================

$(document).ready(function() {
    if(window.innerWidth > 1200){
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
    }
    $('.show-search').on('click', function(){
        $('.form-search').stop().slideToggle(0);
    });
    $('.btn-toggle-menu').on('click', function(){
        $(this).siblings('div').slideToggle(100);
        $(this).parent().siblings().find('div').hide(100);
    });

    $('.overlay-mobile').click(function(){
        $(this).hide(100);
        $('.menu-wrap').removeClass('active');
    });
    $('.menu-bar').click(function(){
        $('.menu-wrap').addClass('active');
        $('.overlay-mobile').show(200);
    });

    $('.btn-log').click(function(){
        $('.log-vcb ul').slideToggle(100);
    });

});
