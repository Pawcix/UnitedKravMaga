const swiper = new Swiper('.swiper', {
	loop: true,
	spaceBetween: 30,
	autoplay: {
		delay: 4000,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 20
		},
		720: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		},
	},
});