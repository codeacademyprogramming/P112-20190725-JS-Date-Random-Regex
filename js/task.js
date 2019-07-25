"use strict";

let navbarElem = document.querySelector("nav");
window.addEventListener("scroll", handleScroll);

function handleScroll(){
    console.log(window.scrollY);
    if(window.scrollY > 56){
        navbarElem.classList.add("fixed-top");
    } else {
        navbarElem.classList.remove("fixed-top");
    }
}



function Student(n, s, e, b){
    this.name = n,
    this.surname = s,
    this.email = e,
    this.birthday = b,
    this.scores = [],
    this.getAverage = function(){

    }

}

let s1 = new Student("Ceyhun", "Cavadov", "c@code.edu.az", "2003-11-08");
s1.scores.push(50);
s1.scores.push(70);
s1.scores.push(100);


console.log(s1.scores[1]);
