# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️
# comment test
# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:

# INPUT: takes in a number ()
# OUTPUT: if integer % 2 == 0 "value is even"; else " value is odd"
# use .even? instead of Modulo since it's Ruby (Boolean value)

def even_or_odd(value)
    if value.even?
        "#{value} is even"
    else
        "#{value} is odd"
    end 
end 

p even_or_odd reposts1
p even_or_odd reposts2
p even_or_odd reposts3

# OUTPUT: "7 is odd", "42 is even", "221 is odd"

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:

# INPUT: a string
# OUTPUT:  the string with vowels removed
# conditional method that uses .include? to find vowels

# def no_vowels(string)
#     if "#{string}".include? ("aeiouAEIOU")
#        put "#{string}".delete ("aeiouAEIOU")
       
#     end
# end
# p no_vowels beatles_album1

# COULDN'T GET DESIRED OUTPUT; OUTPUT: nil

# FOUND THE METHOD BELOW ONLINE; NOT SURE OF EXPLANATION BEHIND SYNTAX BUT I WAS ABLE TO GET IT TO WORK

# def no_vowels(string)
#     string.gsub(/[aeiouAEIOU]/, '')
# end

# p no_vowels beatles_album1

#AFTER DISCUSSING WITH FELLOW CLASSMATE THEY HELPED ME COME UP WITH THIS, MUCH SIMPLER THAN FIRST TWO

def no_vowels(string)
    "#{string}".delete ('aeiouAEIOU')
end

p no_vowels beatles_album1
p no_vowels beatles_album2
p no_vowels beatles_album3


# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:

# INPUT: a string
# OUTPUT: 'STRING' is/is not a variable
# conditional method that sets if string is .toEqual string.reverse, print STRING is a palindrome
# else is STRING is not a palindrome

def detect_palindrome (string)
    if "#{string}".downcase == "#{string}".downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome"
    end
end
p detect_palindrome palindrome_test_case1
p detect_palindrome palindrome_test_case2
p detect_palindrome palindrome_test_case3

# AFTER RUNNING CASE1 I DISCOVERED I NEEDED TO ADD .downcase TO COMPENSATE FOR CAPITAL LETTERS AS WELL
# FIXED MY ISSUE AND REMAINIG TESTS WORKED WELL
