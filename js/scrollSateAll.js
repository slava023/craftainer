// плавный скрол к обектам -------------------------------------------------

const menuLinks = document.querySelectorAll('.sub-menu__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			})
			e.preventDefault();
		}

	}
}

let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let back = document.querySelector('body');
let menu__list = document.querySelector('.menu__list');

header__burger.onclick = function () {
	header__burger.classList.toggle('active');
	menu.classList.toggle('active');
	back.classList.toggle('lock');
}

menu__list.onclick = function () {
	menu__list.classList.remove('active');
	back.classList.toggle('lock');
}
