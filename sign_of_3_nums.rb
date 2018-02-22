# Write a function using a conditional statement to find the sign of the product of three numbers. Display an alert box with the specified sign.
require 'pry'
def sign_of_3_num
  puts "Enter number 1"
  num1 = gets.strip.to_i
  puts "Enter number 2"
  num2 = gets.strip.to_i
  puts "Enter number 3"
  num3 = gets.strip.to_i

  sum = num1 + num2 + num3
  if sum > 0
    puts "the sign is +"
  elsif sum === 0
    puts "the sum is 0"
  else
    puts "the sign is -"
  end
end
sign_of_3_num