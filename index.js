const cards = document.querySelectorAll('.item');

cards.forEach(card => {
    const video = card.querySelector('video');

    if (!video) {
        return;
    }

    card.addEventListener('mouseenter', async () => {
        document.querySelectorAll('.item video').forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });

        try {
            await video.play();
        } catch (error) {
            console.error('Video preview could not play:', error);
        }
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
    });
});
