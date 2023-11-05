// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining items.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// //** COMMENT OUT BEGINS HERE!!

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// describe("colors", () => {
//     it ("akes in an array, removes the first item from the array and shuffles the remaining items", () => {
//         expect(colors(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
//         expect(colors(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
//     })
// })

//** COMMENT OUT ENDS HERE!!

//OUTPUT: ReferenceError: colors is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

//Input: array of colors
//Output: array of colors minus first color listed, & shuffled
//.slice to remove objects starting after 1st object in array for .length of array
// later changed to .shift, nothing seemed to be working at this point


//** COMMENT OUT BEGINS HERE!!

// const colors = (array) => {

//      // Remove first item  => removed .shift also after talking with classmate
//     // const removeColor = array.shift() 
    
//     //added spread operator at suggestion of classmate
//     const [, ...remainder] = array; 

//     // Fisher-Yates shuffle algorithm to shuffle the remaining items
//     // Don't quite understand why THIS was the missing key but it worked
//     for (let i = remainder.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [remainder[i], remainder[j]] = [remainder[j], remainder[i]];
//     }

//     return remainder;
// };

// console.log(colors(colors1))

// console.log(colors(colors2))

//** COMMENT OUT ENDS HERE!!

//This problem was ridiculously hard!!! I tried so many different variations thinking I was doing the right thing and it seemed logically sound. After someone in the cohort asked a question that led me to Fisher-Yates I just knew I had it..until i didn't. When I looked up how to use the algorithm it told me to include a .shift to remove item (previously I was using a .slice and trying to paste the rest of the array together). Every time I ran the function it kept saying I can't access .shift before initilazation. I tried removing it and placing it before the start of the function (array couldn't be reached from outside the function), tried restructuring the entire function and still got an error. I finally looked at my loop and saw array.length - 1 and thought "if I'm doing minus one from the length what do I need .slice for?" Apologies as my psuedo code is probably shot to crap and now I've given you all this paragraph on top of that. If you've made it this far, THANK YOU!



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.


//** COMMENT OUT BEGINS HERE!!

describe("ballotCount", () => {
    it("takes in an object and returns the total number of votes", () => {
        const votes1 = { upVotes: 13, downVotes: 2 }
        // Expected output: 11
        expect(ballotCount(votes1)).toEqual(11)

        const votes2 = { upVotes: 2, downVotes: 33 }
        // Expected output: -31
        expect(ballotCount(votes2)).toEqual(-31)
    })
})

//OUTPUT: ReferenceError: ballot is not defined

// b) Create the function that makes the test pass.

// Pseudo code:

//INPUT: object containing up and down votes (+ and -)
//OUTPUT: the difference of up votes from down votes (subtraction)
//create function to hold subtraction behavior and object data


const ballotCount = (votes) => {
    const totalCount = votes.upVotes - votes.downVotes
        return totalCount
    }

    const votes1 = { upVotes: 13, downVotes: 2 }
    const votes2 = { upVotes: 2, downVotes: 33 }
    
console.log(ballotCount(votes1))

console.log(ballotCount(votes2))


