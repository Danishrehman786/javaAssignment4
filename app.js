// // Question no 1
// // Declare an empty array using JS literal notation to store
// // student names in future.

// // let studentNames = [];


// // Question no 2
// // Declare an empty array using JS object notation to store
// // student names in future.
// // let studentNames = new Array();


// // Question no 3
// // Declare and initialize a strings array.

// // let fruits = ["Apple", "Banana", "Cherry"];


// // Question no 4
// // Declare and initialize a numbers array.
// // let numbers = [1, 2, 3, 4, 5];


// // Question no 5
// // Declare and initialize a boolean array.
// // let booleanArray = [true, false, true, false];


// // Question no 6
// // Declare and initialize a mixed array.
// // let mixedArray = ["Hello", 42, true, null, { name: "John" }, [1, 2, 3]];



// // Question no 7
// // Declare and Initialize an array and store available
// // education qualifications in Pakistan(e.g.SSC, HSC, BCS,
// //     BS, BCOM, MS, M.Phil., PhD).Show the listed
// // qualifications in your browser like:

// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

// document.write("<h1>Qualifications:</h1>");
// document.write("<ul>");
// for (let i = 0; i < qualifications.length; i++) {
//     document.write("<li>" + qualifications[i] + "</li>");
// }
// document.write("</ul>");


// // Question no 8
// // Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// let studentNames = ["Alice", "Bob", "Charlie"];
// let studentScores = [450, 380, 470];
// let totalMarks = 500;

// for (let i = 0; i < studentNames.length; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     document.write("<p>Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage.toFixed(2) + "%</p>");
// }




// // Question no 9


// let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
// document.write("<h1>Colors:</h1>");
// document.write("<p>" + colors.join(", ") + "</p>");

// // a. Add color to the beginning
// let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddBeginning);
// document.write("<p>After adding color to the beginning: " + colors.join(", ") + "</p>");

// // b. Add color to the end
// let colorToAddEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddEnd);
// document.write("<p>After adding color to the end: " + colors.join(", ") + "</p>");

// // c. Add two more colors to the beginning
// colors.unshift("Pink", "Orange");
// document.write("<p>After adding two colors to the beginning: " + colors.join(", ") + "</p>");

// // d. Delete the first color
// colors.shift();
// document.write("<p>After deleting the first color: " + colors.join(", ") + "</p>");

// // e. Delete the last color
// colors.pop();
// document.write("<p>After deleting the last color: " + colors.join(", ") + "</p>");

// // f. Add color at a specific index
// let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// let colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);
// document.write("<p>After adding color at index " + indexToAdd + ": " + colors.join(", ") + "</p>");

// // g. Delete color(s) from a specific index
// let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
// let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numberOfColorsToDelete);
// document.write("<p>After deleting " + numberOfColorsToDelete + " color(s) from index " + indexToDelete + ": " + colors.join(", ") + "</p>");





// // Question no 10

// Write a program to store student scores in an array &
//     sort the array in ascending order using Array’s sort
// method.


// let studentScores = [320, 230, 480, 120];
// document.write("<h1>Student Scores:</h1>");
// document.write("<p>Original Scores: " + studentScores.join(", ") + "</p>");

// studentScores.sort(function (a, b) {
//     return a - b;
// });

// document.write("<p>Sorted Scores: " + studentScores.join(", ") + "</p>");


// // Question no 11
// Write a program to initialize an array with city names.
//     Copy 3 array elements from cities array to selectedCities
// array.


// let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// document.write("<h1>Cities List:</h1>");
// document.write("<p>" + cities.join(", ") + "</p>");

// let selectedCities = cities.slice(1, 4);
// document.write("<h1>Selected Cities List:</h1>");
// document.write("<p>" + selectedCities.join(", ") + "</p>");


// // // Question no 12
// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// let arr = ["This ", " is ", " my ", " cat"];
// let singleString = arr.join("");
// document.write("<h1>Single String:</h1>");
// document.write("<p>" + singleString + "</p>");


// // Question no 13
// Create a new array.Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO - First In First Out)


// const devices = "keyboard,mouse,printer,monitor";
// const deviceArray = devices.split(',');
// const queue = [];
// deviceArray.forEach(device => queue.push(device));


// while (queue.length > 0) {
//     console.log("Out:");
//     console.log(queue.shift());
// }



// // Question no 14

// const devices = "keyboard,mouse,printer,monitor";
// const deviceArray = devices.split(',');

// const stack = [];
// deviceArray.forEach(device => stack.push(device));

// while (stack.length > 0) {
//     console.log("Out:");
//     console.log(stack.pop());
// }


// // Question no 15
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<h1>Phone Manufacturers:</h1>");
// document.write("<select>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");