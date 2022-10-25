import helpers from '../helpers';

const init = async () => {
	helpers.$html.css('overflow', 'hidden');
	let
		images = document.images,
		images_total_count = images.length,
		images_load_count = 0,
		preloader = document.getElementById('page-preloader'),
		rocketBoy = document.getElementById('loader__sprite'),
		windowWidth = window.innerWidth,
		windowHeight = window.innerHeight

	for (let i = 0; i < images_total_count; i++) {
		let image_clone = new Image();
		image_clone.onload = image_loaded;
		image_clone.onerror = image_loaded;
		image_clone.src = images[i].src;
		await sleep(100); // Задержка необходима, чтобы было видно как летит рокет-мен :)
	}

	function image_loaded() {
		images_load_count++;

		let
			perc = (((100 / (images_total_count - 3)) * images_load_count) << 0),
			width = Math.ceil(windowWidth / 100 * perc),
			height = Math.ceil(windowHeight / 100 * perc);

		rocketBoy.style.transform = ('translate(' + width + 'px, -' + height + 'px)');

		if(perc === 160) {
			helpers.$html.css('overflow', 'auto')
			preloader.style.display = 'none';
		}
	}

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

export default {
	init
};
