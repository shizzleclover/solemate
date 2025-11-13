// Infinite Carousel Setup
document.addEventListener('DOMContentLoaded', function() {
    const carouselTracks = document.querySelectorAll('.carousel-track');
    
    carouselTracks.forEach(track => {
        // Clone all product cards
        const cards = track.querySelectorAll('.product-card');
        const cardsArray = Array.from(cards);
        
        // Duplicate cards for seamless infinite scroll
        cardsArray.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });
        
        // Reset animation if it completes (fallback)
        track.addEventListener('animationiteration', function() {
            // Animation will seamlessly loop due to duplicate content
        });
    });
});
