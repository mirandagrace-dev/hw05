console.log("Hello World");

var todaysDateEl = $("#currentDay");
todaysDateEl.text(moment().format("dddd, MMMM, Do YYYY"));
console.log(todaysDateEl);

var hours = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

//looping through the hour array

for (var i = 0; i < hours.length; i++) {
  console.log(hours[i]);

  //crearte row for each  block
  var newRow = $("<div>").attr("class", "row");
  $(".container").append(newRow);
  var showHour = hours[i];

  //create paragraph the contains the hours of the day
  var pHour = $("<p>").attr("class", "hour col-1");
  pHour.text(showHour);
  //create text area
  var textArea = $("<textarea>").attr("class", "col-10 description");
  textArea.attr("id", "hour" + 1);
  textArea.data("hours", hours[i]);

  //create the save buttons
  var saveBtn = $("<button>").attr("class", "saveBtn btn col-1");
  saveBtn.addClass("fas fa-save");

  //append
  $(newRow).append(pHour, textArea, saveBtn);

  //check to see which color block should be
  if (showHour === moment().format("HH")) {
    textArea.addClass("present");
  } else if (showHour > moment().format("HH")) {
    textArea.addClass("future");
  } else {
    textArea.addClass("past");
  }
}
//on click save text-area to local storage
$(".saveBtn").click(function () {
  //add data to local storage
  localStorage.setItem("textArea", $("textarea").val());
  //   textArea.text("textArea");
});
