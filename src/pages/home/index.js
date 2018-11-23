import "./index.scss";

import "../../scripts/lozad";
import Siema from "siema";

const gallery = new Siema({
	draggable: false,
	duration: 400,
	loop: true
});

setInterval(() => gallery.next(), 5000);
