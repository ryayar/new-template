const init = () => {
	const
		images = document.images,
		images_total_count = images.length;
	// preloader = document.getElementById('page-preloader'),
	// loader = document.getElementById('loader'),
	// perc_display = document.getElementById('load_perc');

	let
		images_load_count = 0,
		i = 0;

// while (i < images_total_count) {
	images[0].onload = image_loaded;
	images[0].onerror = image_loaded;
	// images_load_count++;
	// perc_display.innerHTML = (((100 / images_total_count) * images_load_count) << 0) + '%';
	// $(loader).css("width", perc_display.innerHTML);

	// image_clone.onload = image_loaded;

	// image_clone.onerror = image_loaded;
	// image_clone.src = images[i].src;
// 	i++
// }

	function image_loaded() {
		console.log('Привет')
	}

// function image_loaded() {
// 	images_load_count++;
// 	perc_display.innerHTML = (((100 / images_total_count) * images_load_count) << 0) + '%';
// 	$(loader).css("width", perc_display.innerHTML);
// 	// console.log('perc_display.innerHTML ' + perc_display.innerHTML);
//
// 	// if (images_load_count >= images_total_count) {
// 	// 	setTimeout(function () {
// 	// 		if (!preloader.classList.contains('done')) {
// 	// 			preloader.classList.add('done')
// 	// 		}
// 	// 	}, 1000);
// 	// }
// }
};

export default {
	init,
};
