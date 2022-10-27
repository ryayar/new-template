import helpers from '../helpers';

const init = () => {
	$(function () {

		helpers.$window.on('scroll', function () {
			let top = $(this).scrollTop();
			const
				blockHi = $('.hi__row')[0];

			if (helpers.$window.innerWidth() >= 1025) {
				if (window.pageYOffset >= blockHi.offsetTop)  {
					$('.logo').css('transform', 'translateY(-' + (top / 3) + 'px)');
					$('.hi__info-parallax').css('transform', 'translateY(-' + (top / 3.3) + 'px)');
					$('.hi__title').css('transform', 'translateY(-' + (top / 3.6) + 'px)');
					$('.hi__contacts').css('transform', 'translateY(-' + (top / 3.9) + 'px)');
					$('.hi__description').css('transform', 'translateY(-' + (top / 4.2) + 'px)');
				}
			}
		})
	})
}


export default {
	init
}
