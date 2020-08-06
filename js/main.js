// HAMBURGER START

console.log("hamburger FIRED!");

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


// ---------------------------------------------
// ---------------------------------------------


// HAMBURGER SCROLL START

console.log("scroll FIRED!")

function hideBurgerMenu() {

}

let prevScroll = window.pageYOffset;

window.onscroll = function() {
	let currentScroll = window.pageYOffset;
	
	if (prevScroll > currentScroll)
  		{
    	burgerNav.style.top = "0";
    	burgerNav.style.transition = "0.3s";
  		}
  		else
  			{
  			burgerNav.style.top = "-70px";
  			burgerNav.style.transition = "0.3s";
  			}
  		prevScroll = currentScroll;
}

// HAMBURGER SCROLL END


// ---------------------------------------------
// ---------------------------------------------


// SLIDE SHOW START

console.log('slide show FIRED!');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n)
	{
	showSlides(slideIndex += n);
	}

function currentSlide(n)
	{
	showSlides(slideIndex = n);
	}

function showSlides(n)
	{
	let i;
	let slides = document.getElementsByClassName("mySlides");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++)
		{
		slides[i].style.display = "none";
		}
	slides[slideIndex-1].style.display = "block";
	}

// SLIDE SHOW END