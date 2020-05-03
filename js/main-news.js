// js slider home
$(window).bind("load", function() {
    //  video slider
    if($('.right-news .slider-video').length){
        $('.right-news .slider-video').owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:false,
            items:1
        })
    }

    // TVA
    if($('.thu-vien-anh .slider-tva').length){
        $('.thu-vien-anh .slider-tva').owlCarousel({
            loop:true,
            margin:10,
            responsiveClass:true,
            margin:5,
            responsive:{
                0:{
                    items:1,
                    nav:true
                },
                600:{
                    items:2,
                    nav:true
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:true
                }
            }
        });
    }
 });

 // Tab home

 $('#nav-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
})

// search box
jQuery(document).ready(function() {
    jQuery(".searchbox input").keyup(function(e) {
        if (e.keyCode == 13) {
            var inp = jQuery(".searchbox input").val();
            window.location.href = "../tim-kiem.html?keyword=" + inp;
            return false;
        }
    });
});

// Select 

function selectText1() {
    document.getElementById("embed").select();
}
function selectText2() {
    document.getElementById("link").select();
}

// button click
$(window).bind("load", function() {
    $(".share .close").click(function(){
      $(".share").hide();
    });
    $(".share-button").click(function(){
      $(".share").show();
    });

    // pause video

    $('.nav-tabs a').click(function() {
        $('video').each(function() {
            $(this).get(0).pause();
        });
        var tab = $(this).data('tab');
    
        $('.nav-tabs a').removeClass('current');
        $('.tab-content .tab-pane').removeClass('current');
    
        $(this).addClass('current');
        $(this).parent().parent().parent().children("#"+tab).addClass('current');
    });
});


// slider thu vien anh

$(window).bind("load", function() {
    if($("#thu-vien-anh").length){
        var bigimage = $("#thu-vien-anh");
        var thumbs = $("#thumbs");
        //var totalslides = 10;
        var syncedSecondary = true;
        
        bigimage
            .owlCarousel({
            items: 1,
            slideSpeed: 4000,
            nav: true,
            autoplay: false,
            dots: false,
            loop: false,
            responsiveRefreshRate: 200,
            navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
            ]
        })
            .on("changed.owl.carousel", syncPosition);
        
        thumbs
            .on("initialized.owl.carousel", function() {
            thumbs
            .find(".owl-item")
            .eq(0)
            .addClass("current");
        })
            .owlCarousel({
            items: 5,
            dots: false,
            nav: true,
            navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>'
            ],
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: 1,
            responsiveRefreshRate: 100,
            responsive:{
                320:{
                    items:3,
                },
                800:{
                    items:3,
                },
                1024:{
                    items:5,
                }
            }
        })
            .on("changed.owl.carousel", syncPosition2);
        
        function syncPosition(el) {
            //if loop is set to false, then you have to uncomment the next line
            //var current = el.item.index;
        
            //to disable loop, comment this block
            var count = el.item.count - 1;
            var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
        
            if (current < 0) {
            current = count;
            }
            if (current > count) {
            current = 0;
            }
            //to this
            thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
            var onscreen = thumbs.find(".owl-item.active").length - 1;
            var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
            var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();
        
            if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
            }
            if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
            }
        }
        
        function syncPosition2(el) {
            if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
            }
        }
        
        thumbs.on("click", ".owl-item", function(e) {
            e.preventDefault();
            var number = $(this).index();
            bigimage.data("owl.carousel").to(number, 300, true);
        });
    }
});
 
// Js lightgallery


$(window).bind("load", function() {
    $('.overlay-mobile').click(function(){
        $(this).hide(100);
        $('.menu-wrap .menu').removeClass('active');
    });
    $('.bar-menu-mobile').click(function(){
        $('.menu-wrap .menu').addClass('active');
        $('.overlay-mobile').show(200);
    });
    
    $('.go-to-top').click(function(){
        $("html, body").animate({scrollTop: 0}, 1000);
    });
});