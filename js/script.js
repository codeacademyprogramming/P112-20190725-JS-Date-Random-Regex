"use strict";


document.title = new Date();

let pElement = document.createElement("p");
pElement.setAttribute("id", "para");
pElement.id = "para";
pElement.setAttribute("data-p112", "true");
pElement.setAttribute("data-hello", "Welcome to our group");

let buttonElem = document.createElement("button");
buttonElem.appendChild(document.createTextNode("Click Me"));
buttonElem.addEventListener("click", buttonClicked, false);

let body = document.body;

body.appendChild(buttonElem);
body.appendChild(pElement);


function buttonClicked(){
    pElement.innerText = new Date().getUTCHours();
    pElement.classList.toggle("bg-blue");

    // let attrValue = pElement.getAttribute("data-p112");
    // if(Boolean(attrValue) == true){
    //     alert("P112");
    // }

    // let attrWelcome = pElement.getAttribute("data-hello");
    // alert(attrWelcome);
}