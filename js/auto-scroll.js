$(document).ready(function() {
  var carousel = $('.carousel');
  var seats = $('.carousel-seat');
  var isPaused = false;
  var intervalId;

  var next = function(el) {
    if (el.next().length > 0) {
      return el.next();
    } else {
      return seats.first();
    }
  };

  var progress = function(e) {
    if (!isPaused) {
      var el = $('.is-ref').removeClass('is-ref');
      var new_seat = next(el);

      new_seat.addClass('is-ref').css('order', 1);
      for (var i = 2, ref = seats.length; i <= ref; i++) {
        new_seat = next(new_seat).css('order', i);
      }

      carousel.removeClass('is-set');

      setTimeout(function() {
        carousel.addClass('is-set');
      }, 50);
    }
  };

  intervalId = setInterval(function() {
    progress();
  }, 3000);

  $('.carousel-seat').click(function() {
    isPaused = !isPaused;
    if (isPaused) {
      clearInterval(intervalId);
    } else {
      intervalId = setInterval(function() {
        progress();
      }, 2000);
    }
  });
});