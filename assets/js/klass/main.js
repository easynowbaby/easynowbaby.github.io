// Loading Animation
$(window).on("load", function() {

    "use strict";

    //Preloader
	  $("#preloader").delay(200).fadeOut("slow");


    // Mobile Menu
    $(".js-hamburger", "#header").on("click", function() {
        $(".js-hamburger", "#header").toggleClass("is-active");
        // $(".exit-item", "#header").fadeToggle(300);
        $(".header-menu-container", ".header").fadeToggle(500, function() {
            var d = 200,
                factor = d / 3 * 2;
            $(".header-menu-container ul li", "#header").each(function() {
                $(this).delay(d = d + factor).animate({ opacity: '1' }, 100);
            });
            $(".menu-quote", "#header").each(function() {
                $(this).delay(d = d + factor).animate({ opacity: '1' }, 300);
            });
        });
    });




    // Portfolio Masonry
    var $container = $('#portfolio-container');
    $container.isotope({
      masonry: {
       columnWidth: '.portfolio-item'
      },
      itemSelector: '.portfolio-item'
    });
    $('#filters').on( 'click', 'li', function() {
      $('#filters li').removeClass('active');
      $(this).addClass('active');
      var filterValue = $(this).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

    // Blog Masonry
    var $blog_container = $('#main-blog-container');
    $blog_container.isotope({
      masonry: {
       columnWidth: '.blog-item'
      },
      itemSelector: '.blog-item'
    });


});

// Sticky Menu
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $("#sticky").addClass("sticky");
    } else {
        $("#sticky").removeClass("sticky");
    }

});
