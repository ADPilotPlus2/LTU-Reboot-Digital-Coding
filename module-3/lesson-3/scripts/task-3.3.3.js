console.log("Hello");

function calculator (number1, number2, operator){

switch (operator) {
    case "multiply":
        console.log("operator is "+operator);
        console.log("The answer is " + number1*number2);
        console.log(`${number1} x ${number2} = ${number1*number2} `);
        break;
    case "add":
        console.log("operator is "+operator);
        var addAnswer = number1+number2;
        console.log("The answer is " + addAnswer);

        break;
    default:
        console.log("error");
            break;

}

}

calculator(3,5,"multiply");
