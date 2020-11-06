let lazyload = {};

lazyload.main = function() {
	let done = function() {
		img.classList.add("loaded");
		img.removeAttribute("data-src");
		entry.target.classList.add("done");
	};
	let observer = new IntersectionObserver(function (entries, observer) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				let img = entry.target.children[0];
				if (img.complete) {
					done();
				} else {
					img.onload = done;
				}
				img.src = img.dataset.src;
				observer.unobserve(entry.target);
			}
		});
	});
	for (let i = 0; i < lazyload.dom.length; i++) {
		observer.observe(lazyload.dom[i]);
	}
};

lazyload.dom = document.getElementsByClassName("lazyload");
if (lazyload.dom.length > 0) lazyload.main();