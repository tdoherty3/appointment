$(document).ready(function() {
$('.container form').submit(function(event) {
  var nameInput = $ ("input#name").val();
  var descriptionInput = $ ("input#description").val();
  var dateInput = $ ("input#date").val();
  var timeInput = $ ("input#time").val();

$(".name").text(nameInput);
$(".description").text(descriptionInput);
$(".date").text(dateInput);
$(".time").append(timeInput);

$(".output").show();

event.preventDefault();
});
});
