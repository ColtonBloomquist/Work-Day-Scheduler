// Display day and date for today
var todaysDate = moment().format("dddd, MMM Do YYYY, h:mm a");
$("#currentDay").html(todaysDate);

function timeTracker() {
  //get current time
  var currentTime = moment().hour();

  // time block loop
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // Verify time and add/remove classes classes
    if (blockTime < currentTime) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (blockTime === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else if (blockTime > currentTime) {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
