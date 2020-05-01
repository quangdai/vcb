// js slider home
$(window).bind("load", function() {
    //  video slider
    $('.right-news .slider-video').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        items:1
    })

    // TVA
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
    })
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
