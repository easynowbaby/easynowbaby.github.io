// Loading Animation
$(window).on("load", function() {

    "use strict";

	//Preloader
	//   $("#preloader").delay(200).fadeOut("slow");


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


});

// Sticky Menu
$(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
        $("#sticky").addClass("sticky");
    } else {
        $("#sticky").removeClass("sticky");
    }
});


