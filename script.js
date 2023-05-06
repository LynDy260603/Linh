const slides = document.querySelectorAll(".mySlides");

let slideIndex = 1;

// slides[slideIndex-1].style.display = "block";

console.log(slideIndex);
console.log(slides);
console.log(slides, "MARLK");


// Next/previous controls
function plusSlides(n) {
	showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
	showSlides(slideIndex = n);
}


function showSlides(n) {
	console.log("show");
	console.log(slides);
	console.log("show");
	let i;
	let dots = document.getElementsByClassName("dot");

	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}

	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
		console.log(slides);
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}

showSlides(1);