let reviewSlideIndex = 1;
let wosSlideIndex = 1;

showSlides(reviewSlideIndex, "review");
showSlides(wosSlideIndex, "wos");

// Next/previous controls
function plusSlides(n, section) {
  if (section == "review") {
    showSlides(reviewSlideIndex += n, section)
  }
  else if (section == "wos") {
    showSlides(wosSlideIndex += n, section)
  }
}

// Thumbnail image controls
function currentSlide(n, section) {
  if (section == "review") {
    showSlides(reviewSlideIndex = n, section)
  }
  else if (section == "wos") {
    showSlides(wosSlideIndex = n, section)
  }
}

function showSlides(n, section) {
  let i;
  let sectionSlidesClass = "";
  let sectionDotsClass = ""
  let slideIndex = 1
  if (section == "review") {
    sectionSlidesClass = ".review_section .container .slideshow-container .mySlides"
    sectionDotsClass = ".review_section .container .dot"
    slideIndex = reviewSlideIndex
  }
  else if (section == "wos") {
    sectionSlidesClass = ".wos_section .container .slideshow-container .mySlides"
    sectionDotsClass = ".wos_section .container .dot"
    slideIndex = wosSlideIndex
  }
  let slides = document.querySelectorAll(sectionSlidesClass)
  let dots = document.querySelectorAll(sectionDotsClass)
  if (n > slides.length) {
    slideIndex = 1
    if (section == "review") {
      reviewSlideIndex = 1
    }
    else if (section == "wos") {
      wosSlideIndex = 1
    }
  }
  if (n < 1) {
    slideIndex = slides.length
    if (section == "review") {
      reviewSlideIndex = slides.length
    }
    else if (section == "wos") {
      wosSlideIndex = slides.length
    }
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}