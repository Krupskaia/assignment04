/*eslint-env browser */
//STEP 1
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America"];
window.console.log(movies[1]);*/

//STEP 2
/*var movies = new Array(5);
movies[0] = "Lord of the Rings";
movies[1] = "Harry Potter";
movies[2] = "Star Wars";
movies[3] = "Avengers";
movies[4] = "Captan America";
window.console.log(movies[0]);*/

//STEP 3
/*var movies = new Array(5);
movies[0] = "Lord of the Rings";
movies[1] = "Harry Potter";
movies[2] = "Star Wars";
movies[3] = "Avengers";
movies[4] = "Captan America";
movies[movies.length] = "Wonder Woman";

window.console.log(movies.length);*/

//STEP 4
/*var movies = [];
movies[0] = "Lord of the Rings";
movies[1] = "Harry Potter";
movies[2] = "Star Wars";
movies[3] = "Avengers";
movies[4] = "Captan America";
delete movies[0];
window.console.log(movies);*/


//STEP 5
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];

var i;
for (i = 0; i < 7; i += 1) {
    window.console.log(movies[i]);
}*/

//STEP 6
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];

var i;
for (i in movies) {
    window.console.log(movies[i]);
}*/


//STEP 7
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];

    window.console.log(movies.sort());*/


//STEP 8
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];
var leastFavMovies = ["Ted", "Trolls", "Hulk"];
window.console.log("Movies I like:");
window.console.log("");
var i;
for (i = 0; i < 7; i += 1) {
    window.console.log(movies[i]);
}
window.console.log("");
window.console.log("Movies I regret watching:");
window.console.log("");
for (i = 0; i < 7; i += 1) {
    window.console.log(leastFavMovies[i]);
}*/

//STEP 9
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];
movies = movies.concat("Ted", "Trolls", "Hulk");

movies = movies.sort();
window.console.log(movies.reverse());*/


//STEP 10
/*var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];
movies = movies.pop();
window.console.log(movies);
//STEP 11*/
/*
var movies = ["Lord of the Rings", "Harry Potter", "Star Wars", "Avengers", "Captan America", "Wonder Woman", "Batman"];
movies = movies.shift();
window.console.log(movies);
*/

//STEP 12
/*
var movies = ["Lord of the Rings", "Harry Potter", "Ted", "Star Wars", "Avengers", "Trolls", "Captan America", "Wonder Woman", "Hulk", "Batman"];

var position= movies[movies.indexOf("Hulk")];
movies[position] = "The Parent Trap";
window.console.log(movies);
*/


//STEP 13
/*
var employee1 = [];
employee1["employeeid"] = 1;
employee1["name"] = "John Smith";
employee1["department"] = "Sales";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["employeeid"] = 1;
employee2["name"] = "Emmy Miller";
employee2["department"] = "IT";
employee2["isCurrent"] = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;

window.console.log(employees[1].name);
window.console.log(employees[1] ["name"]);
*/


//STEP 14
/*var employee1 = [];
employee1["employeeid"] = 1;
employee1["name"] = "John Smith";
employee1["department"] = "Sales";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["employeeid"] = 1;
employee2["name"] = "Emmy Miller";
employee2["department"] = "IT";
employee2["isCurrent"] = true;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;

var i;
for (i = 0; i< employees.length; i += 1) {
    window.console.log(employees[i] ["name"])
}*/


//STEP 15
/*var employee1 = [];
employee1["employeeid"] = 1;
employee1["name"] = "John Smith";
employee1["department"] = "Sales";
employee1["isCurrent"] = true;
var employee2 = [];
employee2["employeeid"] = 1;
employee2["name"] = "Emmy Miller";
employee2["department"] = "IT";
employee2["isCurrent"] = true;
var employee3 = [];
employee2["employeeid"] = 1;
employee2["name"] = "Mary Taylor";
employee2["department"] = "HR";
employee2["isCurrent"] = false;

var employees = [];
employees[0] = employee1;
employees[1] = employee2;
employees[2] = employee3;

var i;
for (i = 0; i< employees.length; i += 1) {
    if (employees[i] ["isCurrent"] === true){
        window.console.log(employees[i] ["name"])
        } 
}*/

//STEP 16

/*var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
var movieNames = [];
var movieName = [];
var i;
for (i = 0; i < movies.length; i += 1) {
    movieName = movies[i].filter(function (item) {
        "use strict";
        return typeof item === "string";
    });
    movieNames = movieNames.concat(movieName);
}
window.console.log(movieNames);*/

//STEP 17

/*var employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

function display(employees) {
    "use strict";
    employees.forEach(function (employee) {
        window.console.log(employee);
    });
}
display(employees);*/

//STEP 18
/*var testData = [58, "", "abcd", true, null, false, 0];
function filterValues(testData) {
    "use strict";
    testData = testData.filter(function (item) {
        return item !== "";
    });
    testData = testData.filter(function (item) {
        return item !== null;
    });
    testData = testData.filter(function (item) {
        return item !== false;
    });
    testData = testData.filter(function (item) {
        return item !== 0;
    });
    window.console.log(testData);
}
filterValues(testData);*/

//STEP 19
/*var arrayNumbers = [12, 34, 56, 87, 12, 56, 78, 21, 34, 6, 90];

function randomPosition(arrayNumbers) {
    "use strict";
    var randomNumber = parseInt(Math.random() * arrayNumbers.length, 10);
    return arrayNumbers[randomNumber];
}
window.console.log(randomPosition(arrayNumbers));*/

//STEP 20
var arrayNumbers = [12, 34, 56, 87, 12, 56, 201, 21, 34, 6, 57];

function largestNumber(arrayNumbers) {
    "use strict";
    var i, maxnumber = 0;
    for (i = 0; i < arrayNumbers.length; i += 1) {
        if (parseInt(arrayNumbers[i], 10) > maxnumber) {
            maxnumber = arrayNumbers[i];
        }
    }
    return maxnumber;
}
window.console.log(largestNumber(arrayNumbers));









