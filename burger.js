const burgerIcon = document.querySelector('.burger');
const mobileNav = document.querySelector('.navList');

const showNav = () => {
	mobileNav.classList.toggle('navListActive');
	burgerIcon.classList.toggle('navListActive');
};

burgerIcon.addEventListener('click', showNav);
