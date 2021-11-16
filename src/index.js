import { $burgerBtn, $brandSection, $range, $phones } from './js/selectors.js';
import { menuHandle, resetMenu, myObserver } from './js/functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

myObserver.observe($brandSection);
myObserver.observe($range);

for (const $phone of $phones) {
	myObserver.observe($phone);
}
