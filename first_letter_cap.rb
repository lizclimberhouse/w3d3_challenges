# Write a script that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
require 'pry'
def first_letter_cap(sentence)
  sentence = sentence.split(" ")
  array = []
  sentence.each { |s| array << s.capitalize }
  puts sentence = array.join(" ")
end
puts "Enter a sentence"
sentence = gets.strip
first_letter_cap(sentence)