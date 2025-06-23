window.addEventListener('scroll', function () {
    var h1 = document.querySelector('.main-h1');
    var scrollY = window.scrollY;
    var maxScroll = window.innerWidth * 0.2;
    var percent = scrollY / maxScroll;

    if (percent > 1) {
      percent = 1;
    }
    h1.style.opacity = 1 - percent;
    var newSize = 11 + (4 * percent);
    h1.style.fontSize = newSize + 'vw';
  });