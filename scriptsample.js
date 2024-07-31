document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    const box1 = document.querySelector('.box1');
    const box1OffsetTop = box1.offsetTop;
    const windowHeight = window.innerHeight;

    if (scrollY + windowHeight > box1OffsetTop && scrollY < box1OffsetTop + box1.offsetHeight) {
        document.querySelector('.moon').style.transform = `translate(-50%, -50%) translateY(${scrollY * -0.1}px)`;
        document.querySelector('.zenitsu img').style.transform = `translateY(${scrollY * 0.55}px)`;
        document.querySelector('.rock-piece-1').style.transform = `translateY(${scrollY * -0.5}px)`;
        document.querySelector('.rock-piece-2').style.transform = `translateY(${scrollY * -0.3}px)`;
        document.querySelector('.rock-piece-3').style.transform = `translateY(${scrollY * -0.4}px)`;
        document.querySelector('.rock-piece-4').style.transform = `translateY(${scrollY * -0.2}px)`;
    }
});