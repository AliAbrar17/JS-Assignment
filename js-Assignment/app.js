//           CHAPTER NO 1
//   Q NO 1
alert("wellcome to my website")

//  Q NO 2
alert("Error! please enter a valid password")

//   Q NO 3
alert("Wellcome to js land...\n Happy coding.")

//    Q NO 4
alert("Wellcome to js land...")
alert(" Happy coding.")

//  Q NO 5
alert("Hello i can run JS through my web browser's console.")





// CHAPTER NO 2
// Q NO 1
var username;

//   Q NO 2
var myName = "Ali Bin Muhammad Abrar";
// alert(myName);

// Q NO 3
var message = "Hello World"
// alert(message);

// Q NO 4
var Name = "Jhone Doe"
// alert(Name)

var age = "15 years old"
// alert(age);

var profession = "certified mobile app developer"
// alert(profession);

// Q NO 5
var pizzaPattern = "PIZZA \nPIZZ \nPIZ \nPI \nP";
// alert(pizzaPattern);

// Q NO 6
var email = "sameenaali2003@gmail.com";
//  alert("My email address is " + email);

// Q NO 7
var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book " + book);

// Q NO 8
var html = "Yay! I can write HTML content through javascript";
// document.write(html);

//  Q NO 9
var pattern = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(pattern);





//  CHAPTER NO 3
//   Q NO 1
var age = "i am 20 years old"
// alert(age);

// Q NO 2
var visit = "“You have visited this site 10 times”"
// alert(visit);

// Q NO 3
var birthYear = "MY BIRTH YEAR I 2003"
// document.write(birthYear);

// Q NO 4
var Name = "Jhon Doe";
var quantity = "5";
var title = "T-shirts"
// document.write( Name+ "ordered" +quantity +title +"on XYZ cloathing");





// CHAPTER NO 4
// Q NO 1
var firstName = "John", lastName = "Doe", age = 30;

//   Q NO 2
var firstName, _age, user1, $price, isLoggedIn
// var 1stPlace, user-name, class, var, my variable

// Q NO 3
var rules = "Rules for naming JS variables";
var rules2 = "variables name can only contain: firstName, _age, user1, $price, isLoggedIn";
// document.write(rules ); 
// document.write(rules2);






//   CHAPTER NO 5
//    Q NO 1
var number1 = 5;
var number2 = 5;
var sum = number1 + number2
var sub = number1 - number2;
var product = number1 * number2;
var difference = number1 / number2;
var modulus = number1 % number2;
// document.write("the sum of 5 & 5 is" + sum);
// document.write("The subtraction is: " + sub);
// document.write("The product is: " + product);
// document.write("The difference is: " + difference);
// document.write("The modulus is: " + modulus);

//    Q NO 3
let number;
alert("Value after variable declaration is: " + number);

number = 5;
alert("Initial value: " + number);

number++;
alert("Value after increment is: " + number);

number += 7;
alert("Value after addition is: " + number);

number--;
alert("Value after decrement is: " + number);

var remainder = number % 3;
alert("The remainder after dividing by 3 is: " + remainder);

number = 12;
var finalRemainder = number % 3;
alert("The remainder is: " + finalRemainder);

// Q NO 4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
//     document.write("COST OF THE TOTAL MOVIE TICKETS IS " + totalCost + " PKR");

//   Q NO 5
var num = 4;
var table =
        num + " x 1 = " + (num * 1) + "<br>" +
        num + " x 2 = " + (num * 2) + "<br>" +
        num + " x 3 = " + (num * 3) + "<br>" +
        num + " x 4 = " + (num * 4) + "<br>" +
        num + " x 5 = " + (num * 5) + "<br>" +
        num + " x 6 = " + (num * 6) + "<br>" +
        num + " x 7 = " + (num * 7) + "<br>" +
        num + " x 8 = " + (num * 8) + "<br>" +
        num + " x 9 = " + (num * 9) + "<br>" +
        num + " x 10 = " + (num * 10) + "<br>";
// document.write(table);


//   Q NO 6

var celsius = 30;

var fahrenheit = (celsius * 9 / 5) + 32;
// document.write(celsius + "°C is " + fahrenheit + "°F");

fahrenheit = 86;
celsius = (fahrenheit - 32) * 5 / 9;
// document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C");

// Q NO 7
var priceItem1 = 50;
var priceItem2 = 30;
var quantityItem1 = 3;
var quantityItem2 = 2;
var shippingCharges = 10;

var totalCostItem1 = priceItem1 * quantityItem1;
var totalCostItem2 = priceItem2 * quantityItem2;
var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;


var receipt =
        "Price of Item 1: $" + priceItem1 + "<br>" +
        "Quantity of Item 1: " + quantityItem1 + "<br>" +
        "Total Cost of Item 1: $" + totalCostItem1 + "<br><br>" +
        "Price of Item 2: $" + priceItem2 + "<br>" +
        "Quantity of Item 2: " + quantityItem2 + "<br>" +
        "Total Cost of Item 2: $" + totalCostItem2 + "<br><br>" +
        "Shipping Charges: $" + shippingCharges + "<br><br>" +
        "<strong>Total Cost: $" + totalCost + "</strong>";
// document.write(receipt);

//      Q NO 8
var totalMarks = 500;
var marksObtained = 425;
var percentage = (marksObtained / totalMarks) * 100;
var result =
        "Total Marks: " + totalMarks + "<br>" +
        "Marks Obtained: " + marksObtained + "<br>" +
        "Percentage: " + percentage + "%";
// document.write(result);

//  Q NO 9

var usdToPkrRate = 270;
var sarToPkrRate = 70;
var usdAmount = 10;
var sarAmount = 25;
var totalPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

var currency = "Total in Pakistani Rupees: " + totalPkr;
// document.write(currency);

// Q NO 10
var initialNumber = 8;
var final = ((initialNumber + 5) * 10) / 2;
// document.write(final);

//   Q NO 11
var currentYear = 2024;
var birthYear = 2003;
var ageThisYear = currentYear - birthYear;

var age =
        "Current Year: " + currentYear + "<br>" +
        "Birth Year: " + birthYear + "<br>" +
        "Age this year: " + ageThisYear;
//     document.write(age);

//     Q NO 12
var radius = 7;
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
var result =
        "The circumference is " + circumference + "<br>" +
        "The area is " + area;
// document.write(result);

// Q NO 13
var snack = "Chocolates";
var currentAge = 20;
var maxAge = 80;
var amountPerDay = 2;
var yearsLeft = maxAge - currentAge;
var totalAmount = yearsLeft * 365 * amountPerDay;

var result =
        "You will need " + totalAmount + " " + snack + " to last you until the ripe old age of " + maxAge + ".";
// document.write(result);



//       CHAPTER NO 6
// Q NO 1
var a = 10;
var result = "The value of a is " + a + "<br>";
a++;
result += "After increment 1: " + a + "<br>";

a++;
result += "After increment 2: " + a + "<br>";

a++;
result += "After increment 3: " + a + "<br>";

a++;
result += "After increment 4: " + a + "<br>";

a++;
result += "After increment 5: " + a + "<br>";
// document.write(result);

//  Q NO 2
var a = 2;
var b = 1;
var output = "Initial values:<br>a = " + a + "<br>b = " + b + "<br><br>";

var step1 = --a;
output += "--a: " + step1 + "<br>";
var step2 = --b;
output += "--a - --b: " + (a - b) + "<br>";
var step3 = ++b;
output += "--a - --b + ++b: " + (a - b + step3) + "<br>";
var step4 = b--;
output += "--a - --b + ++b + b--: " + (a - b + step3 + step4) + "<br>";
output += "<br>Final values:<br>a = " + a + "<br>b = " + b + "<br>result = " + (a - b + step3 + step4);
// document.write(output);

//   Q NO 3
var userName = prompt("Please enter your name:");
if (userName) {
        //     alert("Hello, " + userName + "! Nice to meet you.");
} else {
        //     alert("Hello! It seems you didn't enter a name.");
}

//      Q NO 4
var userInput = prompt("Enter a number to see its multiplication table (leave blank for default 5):");
var num = 5;
if (userInput !== null && userInput !== "") {
        num = +userInput;
}
var table2 = "";
table2 += num + " x 1 = " + (num * 1) + "<br>";
table2 += num + " x 2 = " + (num * 2) + "<br>";
table2 += num + " x 3 = " + (num * 3) + "<br>";
table2 += num + " x 4 = " + (num * 4) + "<br>";
table2 += num + " x 5 = " + (num * 5) + "<br>";
table2 += num + " x 6 = " + (num * 6) + "<br>";
table2 += num + " x 7 = " + (num * 7) + "<br>";
table2 += num + " x 8 = " + (num * 8) + "<br>";
table2 += num + " x 9 = " + (num * 9) + "<br>";
table2 += num + " x 10 = " + (num * 10) + "<br>";
// document.write(table2);

// Q NO 5
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

var totalMarksPerSubject = 100;

// var obtainedMarks1 = prompt("Enter the obtained marks for " + subject1 + ":");
// var obtainedMarks2 = prompt("Enter the obtained marks for " + subject2 + ":");
// var obtainedMarks3 = prompt("Enter the obtained marks for " + subject3 + ":");

obtainedMarks1 = +obtainedMarks1;
obtainedMarks2 = +obtainedMarks2;
obtainedMarks3 = +obtainedMarks3;

var totalMarks = totalMarksPerSubject * 3;
var obtainedTotalMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (obtainedTotalMarks / totalMarks) * 100;

var resultTable = ""
resultTable += "<table><tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>";
resultTable += "<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
resultTable += "<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
resultTable += "<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
resultTable += "<tr><td><strong>Total</strong></td><td><strong>" + obtainedTotalMarks + "</strong></td><td><strong>" + totalMarks + "</strong></td></tr>";
resultTable += "</table>";
resultTable += "<p><strong>Percentage:</strong> " + percentage + "%</p>";
document.write(resultTable);








//    CHAPTER NO 7
//       Q NO 1
var city = prompt("Enter the name of your city:");
if (city === "Karachi") {
        alert("Welcome to the city of lights");
} else {
        alert("Welcome to " + city);
}

//    Q NO 2
var gender = prompt("Please enter your gender (male/female):");

if (gender === "male") {
        alert("Good Morning Sir.");
} else if (gender === "female") {
        alert("Good Morning Ma’am.");
} else {
        alert("Invalid input. Please enter 'male' or 'female'.");
}

//     Q NO 3
var signalColor = prompt("Please enter the color of the traffic signal (red/yellow/green):");
var message = "";
if (signalColor === "red") {
        message = "Stop! The signal is red.";
} else if (signalColor === "yellow") {
        message = "Caution! The signal is yellow, please slow down and prepare to stop.";
} else if (signalColor === "green") {
        message = "Go! The signal is green.";
} else {
        message = "Invalid input. Please enter 'red', 'yellow', or 'green'.";
}
document.write(message);

//     Q NO 4
var remainingFuel = prompt("Please enter the remaining fuel in your car (in liters):");
if (remainingFuel < 0.25) {
        document.write("Please refill the fuel in your car.");
} else {
        document.write("Your fuel level is sufficient.");
}

// Q NO 5
var a = 4;
if (++a === 5) {
        alert("given condition for variable a is true");
}
//    B 
var b = 82;
if (b++ === 83) {
        alert("given condition for variable b is true");
}
//      C 
var c = 12;
if (c++ === 13) {
        alert("condition 1 is true");
}
if (c === 13) {
        alert("condition 2 is true");
}
if (++c < 14) {
        alert("condition 3 is true");
}
if (c === 14) {
        alert("condition 4 is true");
}

//    D 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
        alert("The cost equals");
}

// E 
if (true) {
        alert("True");
}
if (false) {
        alert("False");
}

//  F 
if ("car" < "cat") {
        alert("car is smaller than cat");
}

//       Q NO 6
var marksSubject1 = prompt("Enter marks obtained in Subject 1:");
var marksSubject2 = prompt("Enter marks obtained in Subject 2:");
var marksSubject3 = prompt("Enter marks obtained in Subject 3:");
var totalMarks = prompt("Enter the total marks:");

marksSubject1 = Number(marksSubject1);
marksSubject2 = Number(marksSubject2);
marksSubject3 = Number(marksSubject3);
totalMarks = Number(totalMarks);

var marksObtained = marksSubject1 + marksSubject2 + marksSubject3;

var percentage = (marksObtained / totalMarks) * 100;

var grade;
if (percentage >= 90) {
        grade = "A+";
} else if (percentage >= 80) {
        grade = "A";
} else if (percentage >= 70) {
        grade = "B";
} else if (percentage >= 60) {
        grade = "C";
} else if (percentage >= 50) {
        grade = "D";
} else {
        grade = "F";
}
document.write("<p>Total Marks: " + totalMarks);
document.write("<p>Marks Obtained: " + marksObtained);
document.write("<p>Percentage: " + percentage);
document.write("<p>Grade: " + grade);

// Q NO 7
var secretNumber = 7;
var userGuess = prompt("Guess the secret number (between 1 and 10):");

var numericGuess = +userGuess;
if (numericGuess === secretNumber) {
        document.write("Bingo! Correct answer.");
} else if (numericGuess + 1 === secretNumber || numericGuess - 1 === secretNumber) {
        document.write("Close enough to the correct answer.");
} else {
        document.write("Sorry, wrong guess. The secret number was " + secretNumber);
}

// Q NO 8
var num = prompt("Enter a number to check if it is divisible by 3:");

var numericValue = +num;
if (numericValue % 3 === 0) {
        document.write("The number " + numericValue + " is divisible by 3.");
} else {
        document.write("The number " + numericValue + " is not divisible by 3.");
}

//  Q NO 9
var input = prompt("Enter a number to check if it is even or odd:");
const num = +input;
if (number % 2 === 0) {
        document.write("The number " + number + " is even.");
} else {
        document.write("The number " + number + " is odd.");
}

// Q NO 10
var temperature = prompt("Enter the current temperature:");
var temp = +temperature;

if (temp > 40) {
        document.write("It is too hot outside.");
} else if (temp > 30) {
        document.write("The Weather today is Normal.");
} else if (temp > 20) {
        document.write("Today’s Weather is cool.");
} else if (temp > 10) {
        document.write("OMG! Today’s weather is so Cool.");
} else {
        document.write("It's cold outside.");
}


//      Q NO 11
var firstNumber = prompt("Enter the first number:");
var num1 = +firstNumber;
var secondNumber = prompt("Enter the second number:");
var num2 = +secondNumber;
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;
if (operation === '+') {
        result = num1 + num2;
} else if (operation === '-') {
        result = num1 - num2;
} else if (operation === '*') {
        result = num1 * num2;
} else if (operation === '/') {

        if (num2 !== 0) {
                result = num1 / num2;
        } else {
                result = "Error: Division by zero is not allowed.";
        }
} else if (operation === '%') {

        if (num2 !== 0) {
                result = num1 % num2;
        } else {
                result = "Error: Division by zero is not allowed.";
        }
} else {
        result = "Error: Invalid operation.";
}
document.write("Result: " + result);








//  CHAPTER NO 12-13
//  Q NO 1
var firstNumber = prompt("Enter the first integer:");
var num1 = +firstNumber;
var secondNumber = prompt("Enter the second integer:");
var num2 = +secondNumber;
if (num1 > num2) {
        document.write("The larger number is: " + num1);
} else if (num2 > num1) {
        document.write("The larger number is: " + num2);
} else {
        document.write("The two numbers are equal.");
}

//  Q NO 2
var userInput = prompt("Enter a number:");
var num = +userInput;
if (num > 0) {
        document.write("The number " + num + " is positive.");
} else if (num < 0) {
        document.write("The number " + num + " is negative.");
} else if (number === 0) {
        document.write("The number is zero.");
} else {
        document.write("Invalid input. Please enter a valid number.");
}

//    Q NO 3
var inputChar = prompt("Enter a single character:");
var char = inputChar;

var isVowel = false;
if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ||
        char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
        isVowel = true;
}
document.write(isVowel);

        //  Q NO 4
        const correctPassword = "securePassword123";
        const userPassword = prompt("Enter your password:");

        if (userPassword === null || userPassword === '') {

            document.write("Please enter your password.");
        } else if (userPassword === correctPassword) {
            document.write("Correct! The password you entered matches the original password.");
        } else {
            document.write("Incorrect password.");
        }

        // Q NO 5
        var greeting;
        var hour = 13;
        
        if (hour < 18) {
            greeting = "Good day";
        } else {
            greeting = "Good evening";
        }   
       document.write(greeting); 
        
        //    Q NO 6
        var timeInput = prompt("Enter the time in 24-hour format (HHMM):");
        var time = +timeInput;

        if (time < 0 || time > 2359 || time % 100 >= 60) {
            document.write("<p>Invalid input. Please enter the time in 24-hour format (HHMM).</p>");
        } else {
            if (time >= 0 && time < 1200) {
                document.write("<p>Good morning!</p>");
            } else if (time >= 1200 && time < 1700) {
                document.write("<p>Good afternoon!</p>");
            } else if (time >= 1700 && time < 2100) {
                document.write("<p>Good evening!</p>");
            } else {
                document.write("<p>Good night!</p>");
            }
        }