console.log("Hi 3.6.4");

let googleLink=document.querySelector("a");

googleLink.addEventListener("click", function(event) {
    event.preventDefault();
    alert("Link is disabled");
    console.log(event);
});