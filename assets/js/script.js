
/**
 * Carousel navigation functions
 * These functions allow users to scroll through the carousel items by clicking the left and right buttons.
 * The carousel scrolls by the width of the carousel container.
 * Operated by an onclick event in the HTML.
 */
function left() {
    const carousel = document.getElementById('carousel');
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}
function right() {
    const carousel = document.getElementById('carousel');
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}