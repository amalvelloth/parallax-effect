
document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;

    // Animations for Parallax-1
    document.querySelector('.moon').style.transform = `translate(-50%, -50%) translateY(${scrollY * -0.1}px)`;
    document.querySelector('.zenitsu img').style.transform = `translateY(${scrollY * 0.55}px)`;

    // Animations for Parallax-2
    const box1 = document.querySelector('.box1');
    if (box1) {
        document.querySelector('.rock-piece-1').style.transform = `translateY(${scrollY * -0.5}px) rotate(${scrollY * 0.3}deg)`;
        document.querySelector('.rock-piece-2').style.transform = `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.3}deg)`;        
        document.querySelector('.rock-piece-3').style.transform = `translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.1}deg)`;        
        document.querySelector('.rock-piece-4').style.transform = `translateY(${scrollY * -0.1}px) rotate(${scrollY * -0.37}deg)`;
        document.querySelector('.rock-piece-5').style.transform = `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.8}deg)`;
    }
});
