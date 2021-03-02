console.log("Hi 3.6.5");

let userInput=document.querySelector("input");




let button = document.querySelector("button");

    button.addEventListener("click", function(event) {

        event.preventDefault();
        alert("Hello " + userInput.value);
        console.log(userInput.value);
    });