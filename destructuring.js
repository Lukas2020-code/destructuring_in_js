/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0]
// let mary = ages[1]
// let joe = ages[2]
// console.log(john, mary, joe)
let names = [john, mary, joe] = ages;
console.log("Using ES6 destructuring assigment: ", john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary] = languages;
console.log("John knows two languages:",johnNative,"as well as",johnSecondary)

// to skip the values we put commas at front of the values
let [, ,maryNative, marySecondary] = languages
console.log("And Mary knows two languages as well:",maryNative,"and", marySecondary)

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};

let { firstLanguage, thirdLanguage } = languages2
console.log(firstLanguage, thirdLanguage)

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'peach', 'cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite)
console.log(secondFavorite)
console.log(others)

let favoriteFoods = {
    brian: 'pizza',
    ania: 'pasta',
    sarah: 'vegetarian',
    andrea: 'steak'
};

let { brian, ania, ...rest } = favoriteFoods
console.log(brian)
console.log(ania)
console.log(rest)