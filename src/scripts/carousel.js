import Vue from 'vue';
import { Carousel, Slide } from 'vue-carousel';
import EventBus from "./event.js";

const ReviewsCarousel = {
	template: "#reviews-widget",
	data() {
		return {
			reviews: [],
			slidesPerPage: 2
		}
	},
	components: {
		Carousel,
		Slide
	},
	methods: {
		pageChange(number) {
			EventBus.$emit('activePage', number);
		},
		pages() {
			if (this.slidesPerPage > 1) {
				return this.reviews.length % 2 === 1
					? (this.reviews.length - 1) / 2
					: this.reviews.length / 2 - 1;
			}

			return this.reviews.length - 1;
		},
		calcSlidesPerPage(self) {
			function calc() {
				self.slidesPerPage = (window.innerWidth <= 700) ? 1 : 2;
			}

			calc();

			window.addEventListener('resize', calc);
		},
		mounted() {
			this.calcSlidesPerPage(this);
		},
		watch: {
			slidesPerPage() {
				EventBus.$emit('pages', this.pages());
			}
		}


	}

};

new Vue({
	el: '.reviews__container',
	data: {
		activePage: 0,
		pages: 0
	},
	components: {
		ReviewsCarousel
	},
	methods: {
		prev() {
			document.querySelector('.VueCarousel-navigation-prev').click();
		},
		next() {
			document.querySelector('.VueCarousel-navigation-next').click()
		}
	},
	mounted() {
		EventBus.$on('activePage', number => {
			this.activePage = number;
		});

		EventBus.$on('pages', number => {
			this.pages = number;
		});
	}
});