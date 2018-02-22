# Write a function that accepts two integers and displays the larger.
require 'pry'
def larger_int
  puts "Enter a number"
  num1 = gets.strip.to_i
  puts "Enter another number"
  num2 = gets.strip.to_i
  puts num = num1 > num2 ? num1 : num2
end
larger_int