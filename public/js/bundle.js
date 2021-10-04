$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	})
	$('.header__link').click(function (event) {
		$('.header__burger, .header__menu').removeClass('active');
		$('body').removeClass('lock')
	});
});
;
$(document).ready(function () {
	$('.work-process__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		infinite: false,

		asNavFor: '.work-process__content',
		adaptiveHeight: false,

	});

	$('.work-process__content').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		draggable: false,
		fade: true,
		asNavFor: '.work-process__slider',
		adaptiveHeight: false,
		dots: true,
		infinite: false,
	});
});