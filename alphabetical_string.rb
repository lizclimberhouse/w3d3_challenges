require 'pry'
def alphabetical_string
  puts "Enter a string"
  array = gets.strip.split("")
  puts string = array.sort!.join("")
end

alphabetical_string