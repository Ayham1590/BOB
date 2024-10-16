document.getElementById('burger').addEventListener('click', function () {
    const navLinks = document.getElementById('nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const totalItems = carouselItems.length;
const itemWidth = carouselItems[0].offsetWidth + 10;

function moveCarousel() {
    currentIndex++;
    if (currentIndex >= totalItems) {
        currentIndex = 0;
    }
    carouselContainer.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

let carouselInterval = setInterval(moveCarousel, 2000);

carouselContainer.addEventListener('mouseover', () => {
    clearInterval(carouselInterval);
});

carouselContainer.addEventListener('mouseout', () => {
    carouselInterval = setInterval(moveCarousel, 2000);
});

