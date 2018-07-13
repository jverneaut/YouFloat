let playerOriginalHeight = 0;
let autoplay = undefined;

window.addEventListener('scroll', event => {
  if (window.location.href.indexOf('watch') !== -1) {
    let player = document.querySelector('#player.style-scope');
    if (player.clientWidth === 0) {
      player = document.querySelector('#player-theater-container');
    }

    const playerBoundingClientRect = player.getBoundingClientRect();

    let scrollTop = event.srcElement.scrollingElement.scrollTop
    if (scrollTop < 240) {
      playerOriginalHeight = playerBoundingClientRect.bottom - playerBoundingClientRect.top;
    }

    const autoplayBtn = document.getElementsByTagName('paper-toggle-button')[0];
    const content = document.querySelector('#columns > #primary');

    let isSmallPlayer = false;
    if (scrollTop > playerOriginalHeight) {
      isSmallPlayer = true;
      content.style.marginTop = `${playerOriginalHeight}px`;
      if (autoplay === undefined) {
        if (autoplayBtn.getAttribute('aria-pressed') === 'true') {
          autoplay = true;
        } else {
          autoplay = false;
        }
      }
      if (autoplay === true) {
        if (autoplayBtn.getAttribute('aria-pressed') === 'true') {
          autoplayBtn.click();
        }
      }
    } else {
      isSmallPlayer = false;
      content.style.marginTop = 0;
      if (autoplay === true) {
        if (autoplayBtn.getAttribute('aria-pressed') === 'false') {
          autoplayBtn.click();
        }
      }
    }

    const html5Player = document.getElementsByClassName('html5-main-video')[0];
    html5Player.classList.toggle('video-float', isSmallPlayer);

    const playerContainer = document.querySelector('#player-container-outer');
    if (playerContainer) {
      playerContainer.classList.toggle('container-float', isSmallPlayer);
    }

    const theaterPlayerContainer = document.querySelector('#player-theater-container');
    if (theaterPlayerContainer) {
      theaterPlayerContainer.classList.toggle('container-float', isSmallPlayer);
    }

    const moviePlayer = document.querySelector('#movie_player')
    moviePlayer.classList.toggle('ytp-small-mode', isSmallPlayer);

    const chrome_bottom = document.getElementsByClassName('ytp-chrome-bottom')[0];
    chrome_bottom.classList.toggle('chrome-bottom-float', isSmallPlayer);
  }
});
