const $burgerMenu = $('.burger-menu');
const $dropdownrMenu = $('.dropdown-menu');

$burgerMenu.on('click', function () {
	$(this).toggleClass('closed');
	if ($(this).hasClass('closed')) {
		$(this).text('X');
	} else {
		$(this).html('<span class="burger-menu__line"></span><span class="burger-menu__line"></span><span class="burger-menu__line"></span><span class="burger-menu__text">Menu</span>')
	}
	$('html').toggleClass('fixed');
	$dropdownrMenu.toggleClass('opened');
});