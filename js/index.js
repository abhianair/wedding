jQuery(document).ready(function($) {

  var end = new Date('04/10/2023 12:00 PM');

  console.log(end);

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;
  var timer;

  function showRemaining() {
    var now = new Date();
    var distance = end - now;
    if (distance < 0) {

        clearInterval(timer);
        $('#counter').html('Just Married!');

        return;
    }
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);

    $('#day').html(days);
    $('#hour').html(hours);
    $('#minute').html(minutes);
    $('#second').html(seconds);
  }

  timer = setInterval(showRemaining, 1000);


});
