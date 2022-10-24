import helpers from '../helpers';

const init = () => {
	$(function () {
		// let w = $(window);

		helpers.$window.on('scroll', function () {
			let top = $(this).scrollTop();
			const blockAbout = $('.about__row')[0];
			if (helpers.$window.innerWidth() > 1025) {
				if ((window.pageYOffset >= blockAbout.offsetTop) && (window.pageYOffset <= (blockAbout.offsetHeight + 300))) {
					$('.person').css(
						'margin-top', '0'
					).css('transform', 'translate(50px, ' + (top / 2.5) + 'px)');
				}
			} else {
				$('.person').css(
					'transform', 'translate(0, 0)'
				)
			}
		})
	})
}


export default {
	init,
}
