const slides = document.querySelectorAll(".slides img");
let slidesINdex = 0;
let intervalId = null;
initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider()
{
    if (slides.length > 0)
    {
        slides[slidesINdex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide,5000);
    }
    
}

function showSlide(index)
{
    if(index >= slides.length)
    {
        slidesINdex = 0;
    }
    else if (index < 0)
    {
        slidesINdex = slides.length - 1;
    }

    slides.forEach(slide =>
    {
        slide.classList.remove("displaySlide");
    })

    slides[slidesINdex].classList.add("displaySlide");
}

function prevSlide()
{
    clearInterval(intervalId); // ?????????????
    slidesINdex--;
    showSlide(slidesINdex)
}

function nextSlide()
{
    slidesINdex++;
    showSlide(slidesINdex)
}



// The Year of The CopyRight
let year = document.querySelector(".year");
let date = new Date().getFullYear();
let arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
let arabicYear = date.toString().replace(/\d/g, (d) => arabicNumbers[d]);
year.innerHTML = arabicYear ;


