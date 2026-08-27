/* =====================================================
   TASK 1
   INTERACTIVE COLOR BUTTON
===================================================== */

const colorButton = document.getElementById("colorButton");
const colorMessage = document.getElementById("colorMessage");

const colors = [
    "#0b5cff",
    "#7c3aed",
    "#059669",
    "#ea580c",
    "#db2777"
];

let colorIndex = 0;

colorButton.addEventListener("click", function () {

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    colorButton.style.backgroundColor = colors[colorIndex];

    colorMessage.textContent =
        "Button color changed successfully!";

});


/* =====================================================
   TASK 2
   DYNAMIC GREETING BASED ON SYSTEM TIME
===================================================== */

const greetingElement = document.getElementById("greeting");
const currentTimeElement = document.getElementById("currentTime");

function displayGreeting() {

    const now = new Date();

    const hour = now.getHours();

    let greeting;

    if (hour >= 5 && hour < 12) {

        greeting = "Good Morning!";

    } else if (hour >= 12 && hour < 17) {

        greeting = "Good Afternoon!";

    } else {

        greeting = "Good Evening!";

    }

    greetingElement.textContent = greeting;

    const formattedTime = now.toLocaleTimeString();

    currentTimeElement.textContent =
        "Current system time: " + formattedTime;
}


/* Run when page loads */

displayGreeting();


/* Update time every second */

setInterval(displayGreeting, 1000);


/* =====================================================
   TASK 3
   ADDITION CALCULATOR
===================================================== */

const numberOne = document.getElementById("numberOne");
const numberTwo = document.getElementById("numberTwo");

const calculateButton =
    document.getElementById("calculateButton");

const calculatorResult =
    document.getElementById("calculatorResult");


calculateButton.addEventListener("click", function () {

    const firstValue = numberOne.value.trim();
    const secondValue = numberTwo.value.trim();


    /* Input validation */

    if (firstValue === "" || secondValue === "") {

        calculatorResult.textContent =
            "Please enter both numbers.";

        return;
    }


    const firstNumber = Number(firstValue);
    const secondNumber = Number(secondValue);


    /* Check whether values are valid numbers */

    if (
        Number.isNaN(firstNumber) ||
        Number.isNaN(secondNumber)
    ) {

        calculatorResult.textContent =
            "Please enter valid numbers.";

        return;
    }


    /* Addition */

    const sum = firstNumber + secondNumber;


    /* Display result */

    calculatorResult.textContent =
        "Result: " + sum;

});