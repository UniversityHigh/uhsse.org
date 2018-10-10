import "./index.scss";

import Siema from "siema";

const gallery = new Siema({
	duration: 400,
	loop: true
});

setInterval(() => gallery.next(), 5000);
