"use strict"

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');
    const galleryImages = Array.from(document.querySelectorAll('main img')); // Converted to array
    let currentIndex = 0;

    // Open lightbox
    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            currentIndex = index; // Keep track of which image is open
            showImage(image);
        });
    });

    function showImage(image) {
        lightboxImg.src = image.src;
        lightboxImg.alt = image.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; 
    }

    // Keyboard controls: Arrow keys + Escape
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            // Move to next image, loop back to start if at the end
            currentIndex = (currentIndex + 1) % galleryImages.length;
            showImage(galleryImages[currentIndex]);
        } else if (e.key === 'ArrowLeft') {
            // Move to previous image, loop to end if at the start
            currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
            showImage(galleryImages[currentIndex]);
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
        setTimeout(() => { lightboxImg.src = ''; }, 300); 
    }
});

console.log(
    `%c ⚡ GRADUATION_SYSTEM_INITIALIZED: SUCCESS (200 OK) ⚡ %c\n\n` +
    `%c Graduate: %cXzaviar Hall\n` +
    `%c Class:    %c2026\n` +
    `%c Status:   %cReady for Next Chapter...%c\n\n` +
    `>> Wishing you endless lines of clean code and grand adventures ahead!`,
    "background-color: #0B0C10; color: #39FF14; font-size: 14px; font-weight: bold; padding: 4px; border-radius: 4px;",
    "",
    "color: #aaa;", "color: #fff; font-weight: bold;",
    "color: #aaa;", "color: #fff; font-weight: bold;",
    "color: #aaa;", "color: #00E5FF; font-weight: bold;",
    ""
);