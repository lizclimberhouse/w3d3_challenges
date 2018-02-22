# Write a for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
require 'pry'
def odd_even
  nums = [*0..15]
  nums.each do |n|
    if n % 2 === 0
      puts "#{n} is even"
    else
      puts "#{n} is odd"
    end
  end
end
odd_even