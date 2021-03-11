


$(window).resize(function () {
	if ($(window).width() > 576) {

		/* $('.cooking-section__slider').slick('unslick'); */

		AOS.init();

	}
	else {

		/* $('.cooking-section__slider').slick({
		  dots: false,
		}); */

		AOS.init({
			disable: 'phone'
		});

	}
});

AOS.init();

/*
$(window).scroll(function(){

	 $('section').each(function() {
		  if($(window).scrollTop() >= $(this).offset().top + $(this).height() || $(window).scrollTop() < $(this).offset().top) {
				$(this).removeClass('active');
		}
		  else {
				$(this).addClass('active');
		}
	 });

});
*/