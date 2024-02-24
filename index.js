function toggleTheme() {
	const html = document.documentElement;
	const img = document.querySelector("#profile img");

	if (html.classList.contains("theme")) {
		html.classList.remove("theme");
		img.setAttribute("src", "./assets/avatar.jpeg");
	}
	else {
		html.classList.add("theme");
		img.setAttribute("src", "./assets/avatar-light.png");
	}
}

function yellHell() {
	alert("Hell")
}