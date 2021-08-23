// Display today's date
var todaysDate = moment().format("dddd, MMM Do YYYY, h:mm a");
$("#currentDay").html(todaysDate);

function timeTracker() {
  //get current time
  var currentTime = moment().hour();

  // time block loop
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // Verify time and add/remove classes
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

var saveTask = function () {
  localStorage.setItem(time, text);
};

$(document).ready(function () {
  // saveBtn click listener
  $(".saveBtn").on("click", function () {
    // Get nearby values
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // Save task
    var saveTask = function () {
      localStorage.setItem(time, text);
    };
    saveTask();
  });

  // get tasks
  $("#hour7 .description").val(localStorage.getItem("hour7"));
  $("#hour8 .description").val(localStorage.getItem("hour8"));
  $("#hour9 .description").val(localStorage.getItem("hour9"));
  $("#hour10 .description").val(localStorage.getItem("hour10"));
  $("#hour11 .description").val(localStorage.getItem("hour11"));
  $("#hour12 .description").val(localStorage.getItem("hour12"));
  $("#hour13 .description").val(localStorage.getItem("hour13"));
  $("#hour14 .description").val(localStorage.getItem("hour14"));
  $("#hour15 .description").val(localStorage.getItem("hour15"));
  $("#hour15.5 .description").val(localStorage.getItem("hour15.5"));

  timeTracker();
});
