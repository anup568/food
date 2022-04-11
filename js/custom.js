//Banner-slider
$('.says-slider').owlCarousel({
    loop:true,
    nav:false,
    dots:true,
    items:1,
    autoplay:true,
    smartSpeed:1000
});

//Navbar-shrink
jQuery(document).on("scroll", function() {
    if (jQuery(document).scrollTop() > 20) {
        jQuery(".navbar-default").addClass("navbar-shrink");
    } else {
        jQuery(".navbar-default").removeClass("navbar-shrink");
    }
});

//Top_button
var btn = $('#top_button');
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });

//Responsive Nav
jQuery('.mob_open_menu').click( function(){
    jQuery('.navigation').toggleClass('open_menu');
  });
  jQuery('.mob_close_menu').click( function(){
    jQuery('.navigation').removeClass('open_menu');
  });

    $(document).ready(function(){
        $('ul li.subMenu').click(function(){
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');
        })
    })

