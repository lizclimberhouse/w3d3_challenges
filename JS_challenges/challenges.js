console.log("this JS is working")

$(document).ready( function() {
  // Write a function using a conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
function oddEven() {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var num3 = parseInt(document.getElementById('num3').value);
  var total = num1 + num2 + num3
  var oddeven = document.getElementById('odd_even');
  
  if (total % 2 === 0) {
    answer = "The total is even"
  }
  else if (total === 0) {
    answer = "The total is 0"
  }
  else {
    answer = "The total is odd"
  }
  alert(answer);
  oddeven.innerHTML = answer;
}
var button = document.getElementById("button")
button.addEventListener('click', oddEven)

// Write a script to check whether a string is blank or not.
$("#button2").click( function() {
  var string = $('#string').val();
  var output = string ? true : false;
  $('#string_y_n').text(output)
})

// Write a script function that returns a passed string with letters in alphabetical order.
$("#button3").click( function() {
  var string2 = $("#string2").val();
  var array = string2.split("");
  var out = array.sort().join("");
  $("#string_alph").text(out);
})


})