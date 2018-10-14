import "./index.scss";

import lozad from "lozad";
import Siema from "siema";

const observer = lozad();

const gallery = new Siema({
	draggable: false,
	duration: 400
});

setInterval(() => {
	observer.triggerLoad(
		gallery.innerElements[
			gallery.currentSlide === gallery.innerElements.length - 1
				? 0
				: gallery.currentSlide + 1
		].querySelector("img")
	);
	gallery.next();
}, 5000);
