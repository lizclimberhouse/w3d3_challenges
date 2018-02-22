# Write a script that accepts a string as a parameter and find the longest word within the string.
require 'pry'
def longest_word(sentence)
  array = sentence.split(" ")
  puts array.inject { |f, s| f.length > s.length ? f : s }
end
puts "Enter a sentence"
sentence = gets.strip
longest_word(sentence)