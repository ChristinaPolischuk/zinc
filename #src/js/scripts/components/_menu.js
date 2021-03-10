const $burgerMenu = $('.burger-menu');
const $dropdownrMenu = $('.dropdown-menu');

$burgerMenu.on('click', function () {
	$(this).toggleClass('closed');
	$dropdownrMenu.toggleClass('opened');
});