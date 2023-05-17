$('.autoplay').slick({
    slidesToShow: 3,
    dots: true,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
});

$(document).ready(function() {
  $('.autoplay').slick({
    dots: true,
    dotsClass: "my-dots",
  });
});
