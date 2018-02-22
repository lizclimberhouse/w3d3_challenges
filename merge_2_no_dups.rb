# Write a script to merge two arrays and removes all duplicates elements.
def merge_2_no_dups
  puts "Enter a sentence"
  arr1 = gets.strip.split(" ")
  puts "Enter another sentence, make sure to use some of the same words"
  arr2 = gets.strip.split(" ")
  # arr1 = ['a', 'the', 'bat', 'ball']
  # arr2 = ['fur', 'dog', 'ball', 'bat']

  full = arr1 + arr2
  print full.uniq
end
merge_2_no_dups