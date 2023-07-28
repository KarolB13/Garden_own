// burger icon
const burgerIcon = document.querySelector('.burger');
const mobileNav = document.querySelector('.navList');

const showNav = () => {
	mobileNav.classList.toggle('navListActive');
	burgerIcon.classList.toggle('navListActive');
};

burgerIcon.addEventListener('click', showNav);

// nav effect
const navLinks = document.querySelectorAll('.navList a');

// Funkcja, która sprawdza, która sekcja jest aktualnie widoczna na ekranie
function setActiveLink() {
	const scrollPosition = window.scrollY;
	navLinks.forEach((link) => {
		const sectionId = link.getAttribute('href');
		const section = document.querySelector(sectionId);
		const sectionTop = section.offsetTop;
		const sectionHeight = section.offsetHeight;

		if (scrollPosition >= sectionTop - window.innerHeight / 2 && scrollPosition < sectionTop + sectionHeight - window.innerHeight / 2) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}
window.addEventListener('scroll', setActiveLink);
