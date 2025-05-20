const ninjaString = "I am a ninja";

const ninjaRegex = /ninja/;

// should be true since the word ninja is in the ninjaString
console.log(ninjaRegex.test(ninjaString));

// using .replace will replace ninja with the word turtle since it is the second argument passed in
console.log(ninjaString.replace(ninjaRegex, "turtle"));

// match will give you an array of the word ninja if there is a match.
console.log(ninjaString.match(ninjaRegex));

const rockStr = "We will we will rock you!";

const rockRegex = /we/;

// this match will only match the lowercase we in the rockStr
console.log(rockStr.match(rockRegex));

const rockStr2 = "We will we will rock you!";

const rockRegex2 = /we/gi;

// i flag the search is case-insensitive. meaning there is no difference between we and We
// g flag the search looks for all matches, without it – only the first match is returned.

// using the i flag and g flag we now will get both we in rockStr2.
console.log(rockStr2.match(rockRegex2));

// MATCHING CHARACTER SETS AND USING RANGES

const ninjaGingaFingaStr = "ninja ginja finja";

// use a character set [ngf] in the first part to find all 3 words. If you want to find more first letters
// you can use the entire alphabet char set [a-z]
const ninjaGingaFingaRegex = /[ngf]inja/g;

console.log(ninjaGingaFingaStr.match(ninjaGingaFingaRegex));

const catStr = "cat bat fat rat";

// using the [a-z] range with the g flag we can match all of the words in the catStr
// NOTE: we are ignoring cases in this example. You can add the i flag to ignore all
// cases or if only wanting to ignore the first position in the range use [a-zA-Z]
const catRegex = /[a-z]at/g;

console.log(catStr.match(catRegex));

// say we would want to find match numbers like a phone number. We can use a number range and curly braces {}

// the phone number str will be 10 digits long
const phoneNumber = "5167586070";

// need to use the global flag for a match. Also will only match the first {10} digits in the string.
// If i add more numbers to the end of the phoneNumber str they wont match. Only will match the first 10.
// Can also use a range for numbers a d letters /[0-9]{5,10}/g <- any number between 5 and 10 times.
// Under 4 wont match and more than 10 will be excluded.
const phoneRegex = /[0-9]{10}/g;

console.log(phoneNumber.match(phoneRegex));

// EXCLUDING USING CARROT

const boyToyRoyStr = "boy toy roy";

// the carrot is excluding the first position if it starts with a t
const boyToyRoyRegex = /[^t]oy/g;

// this line will return boy and roy but will exclude toy because of the carrot
console.log(boyToyRoyStr.match(boyToyRoyRegex));

//METACHARACTERS

/* 

\d - match any digit character (same as [0-9])

\w - match any word character (a-z, A-Z, 0-9, and _)

\s - match a whitespace character (spaces, tabs, etc)

\t - match a tab character only

*/

const metaStr = "5 L";

// 5 L will match because the first position is a number, then a space, and the third is a letter
const metaRegex = /\d\s\w/g;

console.log(metaStr.match(metaRegex));

const metaStr2 = "123 lMzA2";

// metsRegex2 will match the str because we start with 3 numbers, 1 space, and then 5 word characters.
const metaRegex2 = /\d{3}\s\w{5}/g;

console.log(metaStr2.match(metaRegex2));

//SPECIAL CHARACTERS

/* 

+ - The one or more quantifier

\ - The escape character

[] - The character set

[^] - The negate symbol in a character set

? - The zero or one quantifier (makes a preceding char optional)

EXAMPLE: /a[a-z]?/
a matches
ab matches because the ? makes the range optionak because it needs to appear 0 or more times

. - Any character whatsoever (except the newline character)

EXAMPLE: /car./
car is NOT a match because we need a 4th character
card matches
car_ matches
car@ matches

* - The 0 or more quantifier (similar to + )

*/

const onlyFive = "hello this should only match the first 5 letters";

// notice carrot is outside of the range[a-z] to tell the regex that whatever follows must be at the start of the form field.
// notice the $ is at the end of the regex ensuring that the five letter word will be at the end.
const onlyFiveRegex = /^[a-z]{5}$/;

//currently this match returns null because onlyFive has an entire sentence. To get this to match you would need to change it to hello
console.log(onlyFive.match(onlyFiveRegex));

const pireOrTire = "pire or tire or fire";

// () for using the or | abd then whatever follows.
const pireOrTireRegex = /(p|t)ire/gi;

console.log(pireOrTire.match(pireOrTireRegex));
