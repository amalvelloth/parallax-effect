document.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    document.querySelector('.moon').style.transform = `translate(-50%, -50%) translateY(${scrollY * -0.1}px)`;
    document    .querySelector('.zenitsu img').style.transform = `translateY(${scrollY * 0.3}px)`;
});