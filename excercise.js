// 1. Declare a variable named: makeList using the keyword const
// 2. The variable makeList should be assigned an arrow function
// 3. The arrow function should take two parameters named: arr, student
// 4. The arrow function should use a return statement
// 5. The function should return an array of the subjects for the student whose name is passed into the function when called.
// 6. Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
// 7. log out the values  first, second, and rest to view their values

let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

const makeList = (arr, student) => {
    let subject = [];
    
    arr.forEach(person => {
        if (student == person.name) {
            subject = person.subjects
        }
    })
    return subject;
}

let valueBack = makeList(students, 'John')
// console.log(valueBack)

//My solution
// let [first] = valueBack;
// let [, second] = valueBack;
// let [, , ...rest] = valueBack;

//Their solution
let [first, second, ...rest] = makeList(students, 'John')

console.log(first, second, rest)