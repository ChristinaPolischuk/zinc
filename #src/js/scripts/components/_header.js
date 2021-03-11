$(document).on("scroll", function () {
	if
		($(document).scrollTop() > 50) {
		$(".header__logo").hide();
	}
	else {
		$(".header__logo").show();
	}
});