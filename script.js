let scrollTop = 0;
const scrollLimit = 0;

window.addEventListener("scroll", event => {
  let video = document.getElementsByTagName("video")[0];
  let container = document.querySelector("#player-container");

  let chrome_bottom = document.getElementsByClassName("ytp-chrome-bottom")[0];
  let chrome_controls = document.getElementsByClassName(
    "ytp-chrome-controls"
  )[0];
  let progress_bar = document.getElementsByClassName(
    "ytp-progress-bar-container"
  )[0];
  let time_display = document.getElementsByClassName("ytp-time-display")[0];
  let multicam_btn = document.getElementsByClassName(
    "ytp-multicam-button ytp-button"
  )[0];
  let size_btn = document.getElementsByClassName(
    "ytp-size-button ytp-button"
  )[0];

  scrollTop = event.srcElement.scrollingElement.scrollTop;
  video.classList.toggle("video-float", scrollTop > scrollLimit);
  container.classList.toggle("container-float", scrollTop > scrollLimit);
  chrome_bottom.classList.toggle("chrome-btn-float", scrollTop > scrollLimit);
  chrome_controls.classList.toggle(
    "chrome-controls-float",
    scrollTop > scrollLimit
  );
  progress_bar.classList.toggle("progress-bar-float", scrollTop > scrollLimit);
  time_display.classList.toggle("time-display-float", scrollTop > scrollLimit);
  multicam_btn.classList.toggle("multicam-float", scrollTop > scrollLimit);
  size_btn.classList.toggle("size-float", scrollTop > scrollLimit);

  console.log(player);
});
