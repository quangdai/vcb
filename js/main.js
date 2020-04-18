// js slider home
$(window).bind("load", function() {
    $('.slider-home .inner-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        items:1
    })
 });

 // Tab home

 $('#nav-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })