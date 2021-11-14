import { $burgerBtn } from './selectors.js';
import { menuHandle, resetMenu } from './functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});
