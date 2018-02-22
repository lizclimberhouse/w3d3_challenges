# Write a script function that returns a passed string with letters in alphabetical order.
require 'pry'
def alphabetical_string
  puts "Enter a string"
  array = gets.strip.split("")
  puts string = array.sort!.join("")
end

alphabetical_string