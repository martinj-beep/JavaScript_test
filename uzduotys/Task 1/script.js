/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
const searchBar = document.querySelector("#search");
const submitButton = document.querySelector("#submit-btn");
const poundHTML = document.querySelector("#pound");
const gramHTML = document.querySelector("#gram");
const ounceHTML = document.querySelector("#ounce");

let kilogram;
let pound;
let gram;
let ounce;

function kilogramToPound() {
    kilogram = searchBar.value;
    pound = kilogram * 2.2046;
    poundHTML.textContent = `Pounds: ${pound}`;
}

function kilogramToGram() {
    kilogram = searchBar.value;
    gram = kilogram / 0.0010000;
    gramHTML.textContent = `Gram: ${gram}`;
}

function kilogramToOunce() {
    kilogram = searchBar.value;
    ounce = kilogram * 35.274;
    ounceHTML.textContent = `Ounce: ${ounce}`;
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    kilogramToPound();
    kilogramToGram();
    kilogramToOunce();
})