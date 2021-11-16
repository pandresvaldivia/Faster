import { $burgerBtn, $menu, $body } from './selectors.js';

function menuHandle() {
	const isPressed = $burgerBtn.classList.toggle('is-pressed');

	if (isPressed) {
		$menu.classList.add('is-visible');
		$body.style.overflowY = 'hidden';
	} else {
		$menu.classList.remove('is-visible');
		$body.style.overflowY = 'auto';
	}
}

function resetMenu() {
	if ($burgerBtn.classList.contains('is-pressed')) {
		$burgerBtn.classList.remove('is-pressed');
		$menu.classList.remove('is-visible');
		$body.style.overflowY = 'auto';
	}
}

const myObserver = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.add('is-visible');
		}
	},
	{
		threshold: [0.75, 1],
	}
);

export { menuHandle, resetMenu, myObserver };
