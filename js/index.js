// Анимация карточек в виде конвеерной ленты
const swiper = new Swiper('#testimonial-swiper', {
	loop: true,
	autoplay: {
		delay: 0,
	},
	speed: 4000,
	slidesPerView: 3,
	allowTouchMove: false,
});

// Анимация счётчиков чисел
const checkAnimationNumbers = () => {
	const element = document.querySelector('#testimonial-content');
	const elementPosition = {
		top: window.pageYOffset + element.getBoundingClientRect().top,
		left: window.pageXOffset + element.getBoundingClientRect().left,
		right: window.pageXOffset + element.getBoundingClientRect().right,
		bottom: window.pageYOffset + element.getBoundingClientRect().bottom,
	};
	const windowPosition = {
		top: window.pageYOffset,
		left: window.pageXOffset,
		right: window.pageXOffset + document.documentElement.clientWidth,
		bottom: window.pageYOffset + document.documentElement.clientHeight,
	};

	if (
		elementPosition.bottom > windowPosition.top &&
		elementPosition.top < windowPosition.bottom &&
		elementPosition.right > windowPosition.left &&
		elementPosition.left < windowPosition.right
	) {
		document.querySelectorAll('.number-animation').forEach((e) => {
			const endValue = e.getAttribute('data-end-value');
			const increment = e.getAttribute('data-increment');
			const duration = e.getAttribute('data-duration');

			anime({
				targets: e,
				textContent: endValue,
				round: 1 / increment,
				easing: 'easeInOutQuad',
				duration: duration,
			});
		});
	}
};

document.addEventListener('scroll', function () {
	checkAnimationNumbers();
});

checkAnimationNumbers();
