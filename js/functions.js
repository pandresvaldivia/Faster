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

export { menuHandle, resetMenu };
