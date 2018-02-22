# Write a simple script to join all elements of a given array into a string
require 'pry'
def join_array
  arr = ['hello', 'word', 'maybe', 'much', 'true']
  output = arr.join('')
  puts output
end
join_array