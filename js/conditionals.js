"use strict";

/* ########################################################################## */

/**
 *
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function analyzeColor(color){
// if (color==="blue"|| color==="Blue"){
//  return "blue is a cool color, like water, or the sky!";
// }   else if (color==="red"|| color==="Red"){
//     return "Red is a strong color, like roses, or fire!";
// }
// return "hmm.. i dont know that color: "+ color;
//
// }
// let input=prompt("what color are you thinking of?");
// alert(analyzeColor(input));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 *
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor);
/**
 *
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColor(color) {
    switch (color) {
        case("red"): {
            return "red is the color of my cup!";
        }
        case("orange"): {
            return "oranges dont rhyme";
        }
        case("yellow"): {
            return "yellow as the sun!";
        }
        case("green"): {
            return "green like grass!";
        }
        case("blue"): {
            return "blue is like the sky";
        }
        case("indigo"): {
            return "indigo is a unique blue,";
        }
        case("violet"): {
            return "Violet is like purple and im having troble spelling it";
        }
        default:
            return "I dont know that color!";
    }
}

/**
 *
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
//let input= prompt("pick a color");
//alert(analyzeColor(input));


/* ########################################################################## */

/**
 *
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function applyDiscount(luckynum, price) {
    luckynum = Number(luckynum);
    switch (luckynum) {
        case(0): {
            return price;
        }
        case(1): {
            return (price * 0.9);
        }
        case(2): {
            return (price * 0.75);
        }
        case(3): {
            return (price * 0.65);
        }
        case(4): {
            return (price * 0.5);
        }
        case(5): {
            return 0;
        }
    }
}

/**
 *
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
//  var luckyNumber = Math.floor(Math.random() * 6);
// let answer=prompt("what is your total?");
// alert("bam! you got lucky number "+luckyNumber+"! your new total is: "+applyDiscount(luckyNumber,answer));
/**
 *
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function numbers() {
    if (confirm("would you like to enter a number?")) {


        let inputt = prompt("enter a number");
        let result = "";
        if (!isNaN(Number(inputt))&&inputt!=null) {
            if (Number(inputt) % 2 || Number(inputt)===0) {
                result += "This number is even..\n";
            } else {
                result += "This number is odd..\n";
            }
            if (Number(inputt) > 0) {
                result += "this number is positive!\n";
            } else {
                result += "this number is negative!\n";
            }
            result += "This number plus 100 is " + (Number(inputt) + 100);

            return alert(result);
        }

        let retry = confirm("input was not a number, want to try again?");
        if (retry) {
            return numbers();
        }
    }
    alert("goodbye");
    return null;


}


numbers();