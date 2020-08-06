// SLIDE SHOW START

console.log('slide show FIRED!');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex-1].style.display = "block";
}

// SLIDE SHOW END

// HAMBURGER START

console.log("hamburger FIRED");

let button = document.querySelector(".hamburgerbtn")
	burgerNav = document.querySelector(".hamburgersidenav")
	burgerCon = document.querySelector(".hiddenmobnav")
	mainContent = document.querySelector(".contentbox");

function hamburgerMenu()
	{
	burgerCon.classList.toggle("hiddenmobnavtoggled")
	mainContent.classList.toggle("contentboxtoggled")
	burgerNav.classList.toggle("hamburgersidenavtoggled")
	button.classList.toggle("hamburgerbtnasctive");
	}

button.addEventListener("click", hamburgerMenu);

// HAMBURGER END