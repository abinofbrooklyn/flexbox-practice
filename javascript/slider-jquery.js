var slides = $(".slides");
var positions = [0,-320,-640,-960];
var currentPosition = 0;

$(".btn-next").on("click", function() {
  if (currentPosition < positions.length - 1) {
    currentPosition++;
  } else {
    currentPosition = 0;
  }
  slides.animate({
      left: positions[currentPosition]
    }, 500);
});

$(".btn-prev").on("click", function() {
  if (currentPosition > 0) {
    currentPosition--;
  } else {
    currentPosition = positions.length - 1;
  }
  slides.animate({
      left: positions[currentPosition]
    }, 500);
});
