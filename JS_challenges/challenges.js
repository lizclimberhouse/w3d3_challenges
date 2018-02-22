console.log("this JS is working")

// $(document).ready( function() {
function oddEven() {
  var num1 = parseInt(document.getElementById('num1').value);
  // console.log(num1)
  var num2 = parseInt(document.getElementById('num2').value);
  // console.log(num2)
  var num3 = parseInt(document.getElementById('num3').value);
  // console.log(num3)

  var total = num1 + num2 + num3
  // console.log(total)
  
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
  // console.log(answer)
  oddeven.innerHTML = answer;
}


var button = document.getElementById("button")
button.addEventListener('click', oddEven)
