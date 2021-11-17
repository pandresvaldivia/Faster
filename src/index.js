// JS modules
import { $burgerBtn, $brandSection, $range, $phones } from './js/selectors.js';
import { menuHandle, resetMenu, myObserver } from './js/functions.js';

// Styles
import './css/main.css';
import './css/icon.css';
import './css/header.css';
import './css/burger-button.css';
import './css/menu.css';
import './css/hero.css';
import './css/phone.css';
import './css/grid-container.css';
import './css/wrapper.css';
import './css/button.css';
import './css/link.css';
import './css/brands-section.css';
import './css/checkout.css';
import './css/purchase.css';
import './css/track.css';
import './css/range.css';
import './css/password.css';
import './css/section.css';
import './css/testimonial.css';
import './css/card.css';
import './css/sign-up.css';
import './css/footer.css';
import './css/footer-menu.css';
import './css/scrollbar.css';
import './css/animation.css';

$burgerBtn.addEventListener('click', menuHandle);

window.addEventListener('resize', () => {
	window.innerWidth >= 768 && resetMenu();
});

myObserver.observe($brandSection);
myObserver.observe($range);

for (const $phone of $phones) {
	myObserver.observe($phone);
}
