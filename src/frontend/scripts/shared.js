import "../styles/shared.scss";

import "core-js/fn/array/from";
import "core-js/fn/array/find";

const navbarBurgers = document.getElementsByClassName("navbar-burger");

if (navbarBurgers.length > 0) {
	for (let burger of navbarBurgers)
		burger.addEventListener("click", () => {
			const target = document.getElementById(burger.dataset.target);

			if (burger.classList.contains("is-active")) {
				burger.classList.remove("is-active");
				target.classList.remove("is-active");
				return;
			}

			burger.classList.add("is-active");
			target.classList.add("is-active");
		});
}

const tabLists = document.querySelectorAll(".tabs-wrapper > .tabs > ul");
for (let tabList of tabLists) {
	tabList.addEventListener("click", event => {
		let target = event.target;
		if (target.classList.contains("is-active")) return;

		let targetParent = target.parentElement;
		if (targetParent.tagName.toLowerCase() === "li") {
			target = targetParent;
			targetParent = target.parentElement;
		}

		const targetIndex = Array.from(targetParent.children).indexOf(target),
			tabContents = Array.from(
				targetParent.parentElement.parentElement.querySelectorAll(
					".tabs-content > ul > li"
				)
			),
			activeTab = targetParent.querySelector(
				`ul > li[class~="is-active"]`
			),
			activeContent = tabContents.find(tabContent =>
				tabContent.classList.contains("is-active")
			);

		activeTab.classList.remove("is-active");
		activeContent.classList.remove("is-active");
		target.classList.add("is-active");
		tabContents[targetIndex].classList.add("is-active");
	});
}
