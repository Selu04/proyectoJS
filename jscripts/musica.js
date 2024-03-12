document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.card-content');
    let currentIndex = 0;
    let intervalId;

    slides.forEach((slide, index) => {
        if (index !== currentIndex) {
            slide.style.display = 'none';
        }
    });

    function nextSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    function prevSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = 'block';
    }

    function startAutoSlide() {
        intervalId = setInterval(nextSlide, 5000); 
    }

    startAutoSlide(); 

    prevBtn.addEventListener('click', () => {
        prevSlide();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
    });
});
function redirectTo(url) {
    window.location.href = url;
}
;