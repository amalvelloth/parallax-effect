document.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const screenWidth = window.innerWidth;

  // Animations for Parallax-1 (unchanged)
  document.querySelector(
    ".moon"
  ).style.transform = `translate(-50%, -50%) translateY(${scrollY * -0.1}px)`;
  document.querySelector(".zenitsu img").style.transform = `translateY(${
    scrollY * 0.55
  }px)`;

  // Check if the screen width is 991px or wider
  const isWideScreen = screenWidth >= 991;

  // Animations for Parallax-2
  const box1 = document.querySelector(".box1");
  if (box1) {
    if (isWideScreen) {
      // Transformations for screens 991px and wider
      document.querySelector(".rock-piece-1").style.transform = `translateY(${
        scrollY * -0.5
      }px) rotate(${scrollY * 0.3}deg)`;
      document.querySelector(".rock-piece-2").style.transform = `translateY(${
        scrollY * -0.3
      }px) rotate(${scrollY * -0.3}deg)`;
      document.querySelector(".rock-piece-3").style.transform = `translateY(${
        scrollY * -0.5
      }px) rotate(${scrollY * 0.1}deg)`;
      document.querySelector(".rock-piece-4").style.transform = `translateY(${
        scrollY * -0.1
      }px) rotate(${scrollY * -0.2}deg)`;
      document.querySelector(".rock-piece-5").style.transform = `translateY(${
        scrollY * -0.3
      }px) rotate(${scrollY * 0.85}deg)`;
    } else {
      // Transformations for screens smaller than 991px
      document.querySelector(".rock-piece-1").style.transform = `translateY(${
        scrollY * -0.35
      }px) rotate(${scrollY * 0.15}deg)`;
      document.querySelector(".rock-piece-2").style.transform = `translateY(${
        scrollY * -0.25
      }px) rotate(${scrollY * -0.15}deg)`;
      document.querySelector(".rock-piece-3").style.transform = `translateY(${
        scrollY * -0.15
      }px) rotate(${scrollY * 0.05}deg)`;
      document.querySelector(".rock-piece-4").style.transform = `translateY(${
        scrollY * -0.055
      }px) rotate(${scrollY * -0.2}deg)`;
      document.querySelector(".rock-piece-5").style.transform = `translateY(${
        scrollY * -0.055
      }px) rotate(${scrollY * 0.85}deg)`;
    }
  }

  // Animations for the big rocks
  const box2 = document.querySelector(".box2");
  if (box2) {
    const box2Rect = box2.getBoundingClientRect();
    const box2Top = box2Rect.top;
    const box2Height = box2Rect.height;
    const viewportHeight = window.innerHeight;

    // If box2 is at least halfway in the viewport
    const isBox2InView = box2Top < viewportHeight / 2 && (box2Top + box2Height) > 0;

    if (isBox2InView) {
      document.querySelector(".big-rock-1").style.transform = `translateY(${
        scrollY * -0.1
      }px) `;
      document.querySelector(".big-rock-2").style.transform = `translateY(${
        scrollY * -0.2
      }px) `;
      document.querySelector(".big-rock-3").style.transform = `translateY(${
        scrollY * -0.15
      }px) `;
      document.querySelector(".big-rock-4").style.transform = `translateY(${
        scrollY * -0.1
      }px) `;
      document.querySelector(".big-rock-5").style.transform = `translateY(${
        scrollY * -0.1
      }px) `;
      document.querySelector(".big-rock-6").style.transform = `translateY(${
        scrollY * -0.1
      }px) `;
      document.querySelector(".big-rock-7").style.transform = `translateY(${
        scrollY * -0.15
      }px) `;
      document.querySelector(".big-rock-8").style.transform = `translateY(${
        scrollY * -0.15
      }px) `;
    } else {
      // Reset transformations if not in view
      const resetTransform = "translateY(0) rotate(0deg)";
      document.querySelector(".big-rock-1").style.transform = resetTransform;
      document.querySelector(".big-rock-2").style.transform = resetTransform;
      document.querySelector(".big-rock-3").style.transform = resetTransform;
      document.querySelector(".big-rock-4").style.transform = resetTransform;
      document.querySelector(".big-rock-5").style.transform = resetTransform;
      document.querySelector(".big-rock-6").style.transform = resetTransform;
      document.querySelector(".big-rock-7").style.transform = resetTransform;
      document.querySelector(".big-rock-8").style.transform = resetTransform;
    }
  }

  // Animations for Parallax-1 h1 element
  const title = document.querySelector(".Parallax-1 h1");
  if (title) {
    const scaleValue = 1 + scrollY * 0.001; // Adjust the scale factor based on scroll
    title.style.transform = `translateY(${scrollY * 0.1}px) scale(${scaleValue})`;
  }
});
