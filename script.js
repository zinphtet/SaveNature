const bar = document.querySelector('#displayNav .fas');
const nav = document.querySelector('nav ul');
const links = document.querySelectorAll('.nav_link');
let state = false;
bar.addEventListener('click', (e) => {
	e.preventDefault();
	if (!state) {
		bar.className = 'fas fa-times rotate';
		nav.className = 'show_nav';
		state = !state;
	} else {
		bar.className = 'fas fa-bars';
		nav.className = 'hide_nav';
		state = !state;
	}
});

window.onresize = function () {
	if (this.innerWidth >= 700) {
		bar.style.opacity = '0';
		nav.className = '';
	} else {
		bar.style.opacity = '1';
		bar.className = 'fas fa-bars';
		state = false;
	}
};
window.addEventListener('scroll', () => {
	bar.className = 'fas fa-bars';
	nav.className = 'hide_nav';
	state = false;
});

links.forEach((link, i) => {
	link.addEventListener('click', function () {
		nav.className = 'hide_nav';
		state = false;
	});
});
