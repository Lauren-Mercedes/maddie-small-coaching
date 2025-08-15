
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
    // call function to update marker colour
    updateMarkers();
}
function right() {
    const carousel = document.getElementById('carousel');
    const scrollAmount = carousel.offsetWidth;
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    // call function to update marker colour
    updateMarkers();
}


/**
 * Update markers based on the current active item in the carousel.
 * Current active item is calculated by dividing the scrollLeft position of the carousel by the width of the carousel.
 * Markers are updated to reflect the active item by changing their background color (primary color for active, secondary color for inactive).
 * This function is called on scroll and when buttons are clicked.
 */
function updateMarkers() {
    const carousel = document.getElementById('carousel');
    const markers = document.querySelectorAll('.marker');
    const scrollLeft = carousel.scrollLeft;
    const itemWidth = carousel.offsetWidth;
    const activeIndex = Math.round(scrollLeft / itemWidth);

    markers.forEach((marker, index) => {
        if (index === activeIndex) {
            marker.style.backgroundColor = 'var(--primary-color)';
        }
        else {
            marker.style.backgroundColor = 'var(--secondary-color)';
        };
        // Update markers on scroll
        carousel.addEventListener('scroll', updateMarkers);
    });
}

// initial to set the correct starting marker state.
updateMarkers()
