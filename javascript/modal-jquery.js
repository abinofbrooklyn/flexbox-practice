$(".modal-container").hide();
$(".btn-modal").on("click", function() {
  $(".modal-container").fadeIn(500);
  $(".modal-container").on("click", function() {
    $(this).fadeOut(500);
  });
});
