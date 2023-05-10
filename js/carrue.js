$(function() {
  // Owl Carousel
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    nav: true
  });
});

// You don't need JavaScript to display a video on your page, but you may use it to manipulate the video or add additional functionality.

// For example, you can play or pause the video with JavaScript:

const myVideo = document.getElementById("my-video");

function playVideo() {
  myVideo.play();
}

function pauseVideo() {
  myVideo.pause();
}
