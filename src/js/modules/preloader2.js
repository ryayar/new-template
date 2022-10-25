const init = () => {
	let
		images = document.images,
		images_total_count = images.length,
		images_load_count = 0,
		preloader = document.getElementById('page-preloader'),
		loader = document.getElementById('loader'),
		perc_display = document.getElementById('load_perc');

	for (let i = 0; i < images_total_count; i++) {
		let image_clone = new Image();
		// image_clone.onload = image_loaded;
		// image_clone.onerror = image_loaded;
		image_clone.src = images[i].src;
		image_loaded();
		console.log(image_clone)
	}

	function image_loaded() {
		images_load_count++;
		perc_display.innerHTML = (((100 / images_total_count) * images_load_count) << 0) + '%';
		$(loader).css("width", perc_display.innerHTML);
		console.log('perc_display.innerHTML ' + perc_display.innerHTML);

		// if (images_load_count >= images_total_count) {
		// 	setTimeout(function () {
		// 		if (!preloader.classList.contains('done')) {
		// 			preloader.classList.add('done')
		// 		}
		// 	}, 1000);
		// }
	}
}

export default {
	init
};
