// js slider home
$(window).bind("load", function() {
    $('.slider .inner-slider').owlCarousel({
        loop:false,
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
    if(window.innerWidth < 1025 && window.innerWidth > 480 ){
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
                480:{
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
    if(window.innerWidth <  1025 && window.innerWidth > 480 ){
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

    $('li.has-child i').click( function(){
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $('li.has-child i.active').removeClass('active');
            $(this).addClass('active');    
        }
    });
    
    // the 
    $('.multi-the li.has-child').click(function(){
        $('.multi-the li.has-child').removeClass('open');
        $(this).addClass('open');
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
        $(this).siblings('div').stop().slideToggle(100);
        $(this).siblings('a').find('i').toggleClass('rotate').stop();
        $(this).stop().toggleClass('active');
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

$(window).bind('load', function(){
    $('.go-to-top').click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    $('.expand-footer').click(function(){
        $('.toggle-footer').slideToggle(300);
        $(this).toggleClass('active');
    });
    $('.link-top .control a').on('click', function(){
        $(this).parents('.link-top').toggleClass('active');
    });
    $(window).bind('scroll', function(){
        $('.link-top').removeClass('active');
    })
});


// =====================
$(window).bind('load', function(){
    $('.box-link-icon .footer-link .footer-link-title').click(function(){
        $(this).siblings('.list-link').stop().slideToggle();
        $(this).toggleClass('active');

        $(this).parents('.col-12.col-md-6.col-xl-3').siblings().find('.list-link').hide();
        $(this).parents('.col-12.col-md-6.col-xl-3').siblings().find('.footer-link-title').removeClass('active');


    });
});