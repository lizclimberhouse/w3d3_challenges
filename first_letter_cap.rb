require 'pry'
def first_letter_cap
  puts "Enter a sentence"
  sentence = gets.strip.split(" ")
  array = []
  sentence.each { |s| array << s.capitalize }
  puts sentence = array.join(" ")
end
first_letter_cap