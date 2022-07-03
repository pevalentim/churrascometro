/* Carne - 400 gramas por adulto  + 6 horas = (650)
   Cerveja - 1500 ml por adulto  + 6 horas =  (2000)
   Bebidas não alcoolicas - 1000ml + 6 horas = (1500ml)
   Crianças valem por meia pessoa */
let inputAdult = document.getElementById('adult')
let inputKid = document.getElementById('kid')
let inputTime = document.getElementById('time') 
// declaring inputs
console.log(inputAdult)
console.log(inputKid)
console.log(inputTime)
let result = document.getElementById('result');
console.log(result)
let button = document.getElementById('button')
button.addEventListener('click', calc)

function calc(event){
   event.preventDefault();
   let adults = inputAdult.value;
   let kids = inputKid.value; 
   let meatCalc = adults * meatPP() + (kids * meatPP() / 2);
   let meat = meatCalc * (40/100);
   let chicken = meatCalc * (25/100);
   let sausage = meatCalc * (25/100);
   let appetizer = meatCalc * (10/100);
   let sodaCalc = adults * sodaPP() + (kids * sodaPP() / 2);
   let beerCalc = adults * beerPP();
   console.log(meatCalc)
   console.log(sodaCalc)
   console.log(beerCalc)
   result.innerHTML = `<p>${meatCalc} Kg de carne.</p>`
   result.innerHTML += `<p class='meatType'>${meat} Kg de carne bovina / suína.</p>`
   result.innerHTML += `<p class='meatType'>${sausage} Kg de linguiça.</p>`
   result.innerHTML += `<p class='meatType'>${chicken} Kg de frango.</p>`
   result.innerHTML += `<p class='meatType'>${appetizer} g de aperitivos.</p>`
   result.innerHTML += `<p>${sodaCalc / 1000}L de refrigerante.</p>`
   result.innerHTML += `<p>${Math.ceil(beerCalc / 350)} latas de cerveja.</p>`
}
function beerPP(){
   let time = inputTime.value;
   if(time < 6){
      return 1500
   }
   else if(time >= 6){
      return 2000
   }
}
console.log(beerPP())

function sodaPP(){
   let time = inputTime.value;
   if(time < 6){
      return 1000
   }
   else if(time >= 6){
      return 1500
   }
}
console.log(sodaPP())

function meatPP(){
   let time = inputTime.value;
   if(time < 6){
      return 400
   }
   else if(time >= 6){
      return 650
   }
}
console.log(meatPP())