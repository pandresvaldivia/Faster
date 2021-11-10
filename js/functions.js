import { $burgerBtn, $menuContainer, $body } from './selectors.js';

function menuHandle() {
	const isPressed = $burgerBtn.classList.toggle('is-pressed');

	if (isPressed) {
		$menuContainer.classList.add('is-visible');
		$body.style.overflowY = 'hidden';
	} else {
		$menuContainer.classList.remove('is-visible');
		$body.style.overflowY = 'auto';
	}
}

export { menuHandle };
