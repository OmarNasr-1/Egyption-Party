/* ---------------------------------------------------------------NAVBAR*/

function openNav() {
  document.getElementById("fixedNAV").style.width = "200px";
}

function closeNav() {
  document.getElementById("fixedNAV").style.width = "0";
}




/* ---------------------------------------------------------------SCROLLING ANIMATION*/

$("a").click(function () {

  var sectionId = $(this).attr("href");

  var positionOfSection = $(sectionId).offset().top;

  $("html , body").animate({
    scrollTop: positionOfSection
  }, 1000);

})



/* ---------------------------------------------------------------POPED UP SIGNERS*/


$(document).ready(function () {

  $("#pop-up div:first").css("display", "block");
  $("#pop-up h3").click(function () {

    $(this).next().slideToggle(500);
    $("#pop-up div").not($(this).next()).slideUp(500);

  });

});

/* ---------------------------------------------------------------COUNTER OF DAYS*/



function countdown() {
  var now = new Date();
  var eventDate = new Date(2018, 12, 17);

  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTiime;

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24) - 30;

  h %= 24;
  m %= 60;
  s %= 60;

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  document.getElementById("days").innerHTML = "<h3>" + d + " 'DAYS'" + "</h3>";
  document.getElementById("hours").innerHTML = "<h3>" + h + " 'HOURS'" + "</h3>";
  document.getElementById("minutes").innerHTML = "<h3>" + m + " 'MINUTES'" + "</h3>";
  document.getElementById("seconds").innerHTML = "<h3>" + s + " 'SECONDS'" + "</h3>";

  setTimeout(countdown, 1000);
}

countdown();



/*---------------------------------------------------------------- textarea */


$(function () {

  "use strick";
  var max = 100;

  $("textarea").keyup(function () {

    var length = $(this).val().length;
    var character = max - length;

    console.log(character)

    if (character <= 0) {
      $("#char").text("your available character finished");

    } else {

      $("#char").text(character);
    }

  });


});


/* ---------------------------------------------------------------LETTER BY LETTER ANIMATION*/


$(function () {
  var $all_msg = $('#welcome_msg');
  var $wordList = $('#welcome_msg').text().split("");
  $('#welcome_msg').text("");
  $.each($wordList, function (idx, elem) {
    var newEL = $("<span/>").text(elem).css({
      opacity: 0,
    });
    /*https://stackoverflow.com/questions/30832400/fade-in-letter-by-letter-with-jquery*/
    newEL.appendTo($all_msg);
    newEL.delay(idx * 150);
    newEL.animate({
      opacity: 1
    }, 1200);
  });
});
/* ---------------------------------------------------------------END*/