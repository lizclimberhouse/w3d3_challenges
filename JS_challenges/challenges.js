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
// Write a simple script to join all elements of a given array into a string
$("#button4").click( function() {
  var string3 = $("#string3").val();
  var arr = string3.split(" ");
  var string_join = arr.join("");
  $("#string_join").text(string_join);
})
// Write a script to merge two arrays and removes all duplicates elements.
$("#button_merge").click( function() {
  var string_merge1 = $("#string_merge1").val().split(" ")
  var string_merge2 = $("#string_merge2").val().split(" ")
  var string_merge = string_merge1.concat(string_merge2)
  string_merge = string_merge.filter(function(elem, pos, arr) {
    return arr.indexOf(elem) == pos;
  });
  $("#string_merge").text(string_merge)
})
// Write a script to list the properties of a JavaScript object.
$("#button_get_keys").click( function() {
  var student = { 
    name : "David Rayy", 
    sclass : "VI", 
    rollno : 12 };

  var keys = Object.keys(student);
  $("#string_get_keys").text(keys)
})

})