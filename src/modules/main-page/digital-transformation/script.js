$('.owl-right').owlCarousel({
	loop:true,
	autoWidth:true,
	items:4,
	center: true,
	dots: false,
	autoplay: true,
	smartSpeed:1000,
	autoplayTimeout:3500,
	autoplayHoverPause:true
});

$('.owl-left').owlCarousel({
	loop:true,
	autoWidth:true,
	items:4,
	center: true,
	dots: false,
	autoplay: true,
	smartSpeed:1000,
	autoplayTimeout:3500,
	rtl:true,
	autoplayHoverPause:true
});

if (document.querySelector(".digital-transformation") ) {

	$(window).scroll(function() {
		var x = jQuery(this).scrollTop(); // Pos
		var r = 2; // Rate
		var t = $('.digital-transformation').offset();
		var h = $('.digital-transformation').outerHeight();
		var top = t.top -300;
		if (x > top  && x < top + h) {
			$('.digital-transformation__circle').css('transform', 'translateY('+ parseInt((x-top)/r) + 'px');
		}
	});

}