document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const screenWidth = window.innerWidth;

    // Animations for Parallax-1 (unchanged)
    document.querySelector('.moon').style.transform = `translate(-50%, -50%) translateY(${scrollY * -0.1}px)`;
    document.querySelector('.zenitsu img').style.transform = `translateY(${scrollY * 0.55}px)`;

    // Check if the screen width is 991px or wider
    const isWideScreen = screenWidth >= 991;

    // Animations for Parallax-2
    const box1 = document.querySelector('.box1');
    if (box1) {
        if (isWideScreen) {
            // Transformations for screens 991px and wider
            document.querySelector('.rock-piece-1').style.transform = `translateY(${scrollY * -0.5}px) rotate(${scrollY * 0.3}deg)`;
            document.querySelector('.rock-piece-2').style.transform = `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.3}deg)`;
            document.querySelector('.rock-piece-3').style.transform = `translateY(${scrollY * -0.5}px) rotate(${scrollY * 0.1}deg)`;
            document.querySelector('.rock-piece-4').style.transform = `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.2}deg)`;
            document.querySelector('.rock-piece-5').style.transform = `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.85}deg)`;
        } else {
            // Transformations for screens smaller than 991px
            document.querySelector('.rock-piece-1').style.transform = `translateY(${scrollY * -0.3}px) rotate(${scrollY * 0.15}deg)`;
            document.querySelector('.rock-piece-2').style.transform = `translateY(${scrollY * -0.2}px) rotate(${scrollY * -0.15}deg)`;
            document.querySelector('.rock-piece-3').style.transform = `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.05}deg)`;
            document.querySelector('.rock-piece-4').style.transform = `translateY(${scrollY * -0.05}px) rotate(${scrollY * -0.2}deg)`;
            document.querySelector('.rock-piece-5').style.transform = `translateY(${scrollY * -0.05}px) rotate(${scrollY * 0.4}deg)`;
        }
    }
});
