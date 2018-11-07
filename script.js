$(document).ready(function() {
	new WOW({mobile:false}).init();
	$(".main-menu").on("click","a", function (event) {
        var links  = $(this).attr('href'),
            top = $(links).offset().top;
        if ($('.main-menu a').hasClass('anchor')) {
        event.preventDefault();
        $('body,html').animate({scrollTop: top}, 1500);
    };
    if($('.main-menu a').on('clicked')) {
    $("#phone-menu_bg").hide();
	$(".mobile-nav").hide();
	$(".bottom-header-section").removeClass('bottom-header-section-opacity');
	};
    });
	$("#go_product").on("click", function () {
		$([document.documentElement, document.body]).animate({
        scrollTop: $("#product").offset().top}, 1500);      
});
$(".burger").click(function() {
	$("#phone-menu_bg").addClass("mobile-menu_bg");
	$(".mobile-menu_bg").slideToggle();
	$("#menu").addClass('mobile-nav');
	$("#menu").slideToggle();
	$(".bottom-header-section").toggleClass('bottom-header-section-opacity');
});
$(window).on('resize scroll', function() {
	$("#phone-menu_bg").hide();
	$(".mobile-nav").hide();
	$(".bottom-header-section").removeClass('bottom-header-section-opacity');
	if ($(".burger").is(':hidden')) {
		$(".desktop-nav").show();
	};
	if ($("#img9").is(':visible')) {
  	$(".row-hide").removeClass("row-hide-block");
  	$("#btn_load-prewiev span").text("MORE");
  	$("#btn_load-prewiev").addClass("btn_load-more");
	$("#btn_load-prewiev").removeClass("btn_load-hide");
  	};
});

$('.carousel_list-team').slick({
	lazyLoad: 'ondemand',
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	speed: 800,
	cssEase: 'ease-out',
	autoplaySpeed: 3000,
	pauseOnFocus: false,
	responsive: [
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.carousel_clients').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	speed: 2000,
	infinite: true,
	arrows: false,
	draggable: false,
	pauseOnHover: false,
	pauseOnFocus: false,
	responsive: [
	{
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 999,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false
      }
    }
  ]
});
$('.carousel_quotes').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	autoplay: true,
	autoplaySpeed: 10000,
	speed: 3000,
	infinite: true,
	arrows: false,
	draggable: false,
	pauseOnHover: false,
	pauseOnFocus: false
});

$('.dark-layer').on('mouseenter', function (e) {
		$('.social', this).each(function () {
			$(this).addClass("opacity-social-elements");
   });
		$('.team-image-opacity', this).each(function () {
	  		$(this).css('opacity', '0.5');
   });
		$(this).each(function () {
     		$(this).css('background-color', '#555');
   });
});

$('.dark-layer').on('mouseleave', function (e) {
  		$('.social', this).each(function () {
    		$(this).removeClass("opacity-social-elements");
   });
   		$('.team-image-opacity', this).each(function () {
     		$(this).css('opacity', '1');
   });
   		$(this).each(function () {
     		$(this).css('background-color', 'none');
   });
 });

$("#btn_load-prewiev").on("click", function() {
	$(".row-hide").toggleClass("row-hide-block");

	if ($(".row-hide").hasClass("row-hide-block")) {
		$("#btn_load-prewiev span").text("HIDE");
		$("#btn_load-prewiev").removeClass("btn_load-more");
		$("#btn_load-prewiev").addClass("btn_load-hide");
	} else {
		$("#btn_load-prewiev span").text("MORE");
		$("#btn_load-prewiev").addClass("btn_load-more");
		$("#btn_load-prewiev").removeClass("btn_load-hide");
	}
});

});