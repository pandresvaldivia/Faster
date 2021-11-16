import { $burgerBtn, $brandSection, $range, $phones } from './selectors.js';
import { menuHandle, resetMenu, myObserver } from './functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

myObserver.observe($brandSection);
myObserver.observe($range);

for (const $phone of $phones) {
	myObserver.observe($phone);
}
