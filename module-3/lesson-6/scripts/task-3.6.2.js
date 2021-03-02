console.log("3.6.2");

let domDiv=document.querySelector("#dom-div");

let paragraph = document.createElement("p");

let paragraphText =document.createTextNode("text created by the DOM");

paragraph.appendChild(paragraphText );

domDiv.appendChild(paragraph);