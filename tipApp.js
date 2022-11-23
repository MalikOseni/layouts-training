// const sumTotal = (a,b) => {
//     return a + b;
// }
// const calFoodTotal=(food,tip) => {
//     tipPercentage = tip / 100;
//     tipAmount = food * tipPercentage;
//     total = sum(food, tipAmount);
//     return total;
// }
// console.log(calFoodTotal(100, 20))

const actors = [
    { actor: 'johnny', networth: 3999 },
    { actor: 'amber', networth: 99 },
    {actor:'slader',networth:2333}
] 
let result = actors.filter(e => e.networth > 99)
console.log(result[0]);

let dram = document.createElement('span')
let text = document.createTextNode('help me');
dram.appendChild(text);
// document.body.append(dram)
var script = document.createElement('span8`');
 script.innerHTML = `<h2>someScript</h2>`;
document.body.appendChild(script);
 console.log(script)