import { $burgerBtn, $brandSection, $range } from './selectors.js';
import { menuHandle, resetMenu } from './functions.js';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

const myObserver = new IntersectionObserver(
	(entries) => {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.add('is-visible');
		}
	},
	{
		threshold: 0.75,
	}
);

myObserver.observe($brandSection);
myObserver.observe($range);
